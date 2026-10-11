import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GUJARAT_ORIGIN, GLOBAL_DESTINATIONS } from '../data/destinations';
import { ShippingDestination } from '../types/denim';
import { Plane, Ship, Navigation, Globe, Clock, Box, ShieldCheck, MapPin } from 'lucide-react';

interface GlobalDeliveryGlobeProps {
  onSelectDestination?: (dest: ShippingDestination) => void;
  fullHeight?: boolean;
}

export const GlobalDeliveryGlobe: React.FC<GlobalDeliveryGlobeProps> = ({
  onSelectDestination,
  fullHeight = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedDest, setSelectedDest] = useState<ShippingDestination | null>(GLOBAL_DESTINATIONS[0]);
  const [isInteracting, setIsInteracting] = useState(false);
  const [viewMode, setViewMode] = useState<'all' | 'air' | 'sea'>('all');

  // Three.js object references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.3, y: -1.2 });
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef(true);
  const lastInteractionTimeRef = useRef(Date.now());
  const markersRef = useRef<{ mesh: THREE.Mesh; dest: ShippingDestination }[]>([]);
  const flightBeziersRef = useRef<{ curve: THREE.CubicBezierCurve3; particle: THREE.Mesh; progress: number; speed: number }[]>([]);

  // Convert lat/lng to 3D Cartesian coordinates on sphere of radius R
  const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  // Focus globe rotation on given coordinates
  const focusOnCoordinates = (lat: number, lng: number) => {
    autoRotateRef.current = false;
    lastInteractionTimeRef.current = Date.now();
    
    // Calculate Euler angles to face the camera
    const phi = (lat * Math.PI) / 180;
    const theta = ((lng - 90) * Math.PI) / 180;
    targetRotationRef.current = {
      x: phi * 0.5,
      y: -theta - Math.PI / 2,
    };
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 560;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x071426, 0); // Transparent so dark denim background shines through
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Lighting (Soft ambient + warm golden-orange directional)
    const ambientLight = new THREE.AmbientLight(0x385785, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffd36a, 1.8);
    dirLight1.position.set(200, 150, 200);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x174a7e, 1.0);
    dirLight2.position.set(-200, -100, -100);
    scene.add(dirLight2);

    // 4. Globe Master Group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 75;

    // Procedural High-Contrast Earth Texture for Denim aesthetic
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Base deep indigo ocean
      ctx.fillStyle = '#071426';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle longitude & latitude grid lines in faint gold/indigo
      ctx.strokeStyle = 'rgba(23, 74, 126, 0.35)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 64) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw stylized world landmasses with warm gold-indigo tints
      ctx.fillStyle = '#0B1B32';
      // Eurasia & Africa cluster
      ctx.beginPath();
      ctx.ellipse(1100, 380, 480, 260, 0, 0, Math.PI * 2);
      ctx.fill();
      // Americas cluster
      ctx.beginPath();
      ctx.ellipse(450, 460, 260, 360, 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Australia
      ctx.beginPath();
      ctx.ellipse(1700, 720, 140, 110, 0, 0, Math.PI * 2);
      ctx.fill();

      // Landmass contour outlines in subtle metallic gold
      ctx.strokeStyle = 'rgba(245, 166, 35, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const earthTexture = new THREE.CanvasTexture(canvas);
    earthTexture.wrapS = THREE.RepeatWrapping;
    earthTexture.wrapT = THREE.ClampToEdgeWrapping;

    // Earth Sphere
    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpScale: 0.05,
      specular: new THREE.Color(0x174a7e),
      shininess: 12,
      color: new THREE.Color(0x0e2444),
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // Subtle Glowing Atmosphere Envelope
    const atmosGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.05, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x174a7e),
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(atmosMesh);

    // Golden Gujarat Origin Marker (Ahmedabad / Mundra Port)
    const gujaratPos = latLngToVector3(GUJARAT_ORIGIN.lat, GUJARAT_ORIGIN.lng, GLOBE_RADIUS);
    const originGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const originMat = new THREE.MeshBasicMaterial({ color: 0xffd36a });
    const originMesh = new THREE.Mesh(originGeo, originMat);
    originMesh.position.copy(gujaratPos);
    globeGroup.add(originMesh);

    // Pulsing outer halo for Gujarat
    const haloGeo = new THREE.RingGeometry(2.8, 4.8, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf5a623,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.copy(gujaratPos.clone().multiplyScalar(1.02));
    haloMesh.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(haloMesh);

    // Destination Markers
    const markers: { mesh: THREE.Mesh; dest: ShippingDestination }[] = [];
    const flightBeziers: { curve: THREE.CubicBezierCurve3; particle: THREE.Mesh; progress: number; speed: number }[] = [];

    GLOBAL_DESTINATIONS.forEach((dest, index) => {
      const destPos = latLngToVector3(dest.lat, dest.lng, GLOBE_RADIUS);
      
      // Marker Pin
      const pinGeo = new THREE.SphereGeometry(1.6, 12, 12);
      const pinMat = new THREE.MeshBasicMaterial({ color: 0xf5a623 });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(destPos);
      globeGroup.add(pinMesh);
      markers.push({ mesh: pinMesh, dest });

      // 3D Flight Stimulation Arc: Cubic Bezier curve elevated above globe
      const midPoint = gujaratPos.clone().lerp(destPos, 0.5);
      const distance = gujaratPos.distanceTo(destPos);
      const arcElevation = GLOBE_RADIUS + Math.min(distance * 0.45, 38);
      midPoint.normalize().multiplyScalar(arcElevation);

      const controlPoint1 = gujaratPos.clone().lerp(midPoint, 0.5).normalize().multiplyScalar(arcElevation * 0.95);
      const controlPoint2 = destPos.clone().lerp(midPoint, 0.5).normalize().multiplyScalar(arcElevation * 0.95);

      const curve = new THREE.CubicBezierCurve3(gujaratPos, controlPoint1, controlPoint2, destPos);
      const points = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: index % 2 === 0 ? 0xffd36a : 0xf5a623,
        transparent: true,
        opacity: 0.45,
      });
      const curveLine = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(curveLine);

      // Moving Flight Cargo Particle
      const particleGeo = new THREE.SphereGeometry(1.0, 8, 8);
      const particleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const particleMesh = new THREE.Mesh(particleGeo, particleMat);
      globeGroup.add(particleMesh);

      flightBeziers.push({
        curve,
        particle: particleMesh,
        progress: (index * 0.12) % 1.0, // Stagger flight launches
        speed: 0.003 + (index % 3) * 0.001,
      });
    });

    markersRef.current = markers;
    flightBeziersRef.current = flightBeziers;

    // Focus initial view toward Gujarat & Middle East
    targetRotationRef.current = { x: 0.35, y: -2.3 };

    // 5. Mouse / Drag Events for Drag-to-Spin & Click-to-Focus
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      autoRotateRef.current = false;
      setIsInteracting(true);
      lastInteractionTimeRef.current = Date.now();
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !globeGroupRef.current) return;
      lastInteractionTimeRef.current = Date.now();
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.006;
      targetRotationRef.current.x += deltaY * 0.006;
      targetRotationRef.current.x = Math.max(-1.2, Math.min(1.2, targetRotationRef.current.x));

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onCanvasClick = (e: MouseEvent) => {
      if (!cameraRef.current || !rendererRef.current || !globeGroupRef.current) return;
      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, cameraRef.current);
      const pinMeshes = markersRef.current.map((m) => m.mesh);
      const intersects = raycaster.intersectObjects(pinMeshes);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const found = markersRef.current.find((m) => m.mesh === clickedMesh);
        if (found) {
          setSelectedDest(found.dest);
          if (onSelectDestination) onSelectDestination(found.dest);
          focusOnCoordinates(found.dest.lat, found.dest.lng);
        }
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('click', onCanvasClick);

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        autoRotateRef.current = false;
        setIsInteracting(true);
        lastInteractionTimeRef.current = Date.now();
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      lastInteractionTimeRef.current = Date.now();
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.007;
      targetRotationRef.current.x += deltaY * 0.007;
      targetRotationRef.current.x = Math.max(-1.2, Math.min(1.2, targetRotationRef.current.x));

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 560;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto-resume auto-rotate after 4.5 seconds of user inactivity
      if (!isDraggingRef.current && Date.now() - lastInteractionTimeRef.current > 4500) {
        autoRotateRef.current = true;
        setIsInteracting(false);
      }

      if (autoRotateRef.current) {
        targetRotationRef.current.y += 0.0018; // Soft gentle auto-rotation
      }

      // Smooth interpolation for camera & rotation
      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y += (targetRotationRef.current.y - globeGroupRef.current.rotation.y) * 0.06;
        globeGroupRef.current.rotation.x += (targetRotationRef.current.x - globeGroupRef.current.rotation.x) * 0.06;
      }

      // Pulse Gujarat halo ring
      const time = Date.now() * 0.003;
      haloMesh.scale.setScalar(1.0 + Math.sin(time) * 0.15);

      // Animate Flight Stimulation cargo particles along 3D Bezier paths
      flightBeziersRef.current.forEach((item) => {
        item.progress += item.speed;
        if (item.progress > 1.0) item.progress = 0;
        const currentPos = item.curve.getPoint(item.progress);
        item.particle.position.copy(currentPos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('click', onCanvasClick);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const handleSelectDest = (dest: ShippingDestination) => {
    setSelectedDest(dest);
    if (onSelectDestination) onSelectDestination(dest);
    focusOnCoordinates(dest.lat, dest.lng);
  };

  return (
    <div className={`relative w-full ${fullHeight ? 'h-[720px]' : 'h-[620px]'} rounded-2xl bg-gradient-to-b from-[#0B1B32] via-[#071426] to-[#040C17] border border-[#174A7E]/50 overflow-hidden shadow-2xl`}>
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Top Header Overlay with Origin Details */}
      <div className="absolute top-5 left-5 right-5 pointer-events-none flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
        <div className="bg-[#071426]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[#F5A623]/30 pointer-events-auto max-w-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD36A] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFD36A]">
              Origin: Gujarat Manufacturing Hub, India
            </span>
          </div>
          <p className="text-xs text-[#A9B6C7] mt-1 leading-relaxed">
            Connected to Mundra & Pipavav Container Terminals with continuous containerized roll shipments to 10+ global destinations.
          </p>
        </div>

        {/* Interaction hint & status */}
        <div className="bg-[#0B1B32]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#174A7E] text-xs text-[#A9B6C7] pointer-events-auto flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>{isInteracting ? 'Manual Orbit' : 'Auto-Rotating'}</span>
          </div>
          <span className="text-slate-600">·</span>
          <span className="hidden sm:inline">Drag to spin · Click marker to inspect</span>
        </div>
      </div>

      {/* Floating Destination Details Inspector (Bottom Left) */}
      {selectedDest && (
        <div className="absolute bottom-5 left-5 z-20 max-w-sm w-full bg-[#071426]/95 backdrop-blur-md rounded-xl p-4 border border-[#F5A623]/40 shadow-xl transition-all duration-300">
          <div className="flex items-start justify-between gap-3 border-b border-[#174A7E]/60 pb-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F5A623]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedDest.region} Corridor</span>
              </div>
              <h3 className="text-base font-bold text-white mt-0.5">
                {selectedDest.country} · {selectedDest.city}
              </h3>
            </div>
            <span className="text-xs bg-[#123E70] text-[#FFD36A] px-2 py-0.5 rounded font-mono font-medium">
              {selectedDest.annualExportVolumeMeters}/yr
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-3 text-xs">
            <div className="bg-[#0B1B32] p-2 rounded-lg border border-[#174A7E]/40">
              <div className="flex items-center gap-1 text-[#A9B6C7] mb-1">
                <Plane className="w-3 h-3 text-[#FFD36A]" />
                <span>Air Freight</span>
              </div>
              <div className="font-semibold text-white">{selectedDest.airTransitDays}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{selectedDest.airHub}</div>
            </div>

            <div className="bg-[#0B1B32] p-2 rounded-lg border border-[#174A7E]/40">
              <div className="flex items-center gap-1 text-[#A9B6C7] mb-1">
                <Ship className="w-3 h-3 text-[#38BDF8]" />
                <span>Sea Freight</span>
              </div>
              <div className="font-semibold text-white">{selectedDest.seaTransitDays}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{selectedDest.primaryPort}</div>
            </div>
          </div>

          <p className="text-[11px] text-[#A9B6C7] line-clamp-2">
            <strong className="text-slate-300 font-medium">Key Buyers: </strong>
            {selectedDest.notableBuyers}
          </p>
        </div>
      )}

      {/* Quick Location Select Strip (Bottom Right) */}
      <div className="absolute bottom-5 right-5 z-20 hidden lg:flex flex-col gap-1.5 bg-[#071426]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#174A7E]/60 max-h-60 overflow-y-auto w-56 text-xs">
        <div className="text-[11px] font-semibold text-[#FFD36A] px-1 pb-1 uppercase tracking-wider border-b border-[#174A7E]/40 flex items-center justify-between">
          <span>Global Delivery Ports</span>
          <Navigation className="w-3 h-3 text-[#F5A623]" />
        </div>
        {GLOBAL_DESTINATIONS.map((dest) => {
          const isSelected = selectedDest?.id === dest.id;
          return (
            <button
              key={dest.id}
              onClick={() => handleSelectDest(dest)}
              className={`text-left px-2 py-1.5 rounded transition-colors flex items-center justify-between ${
                isSelected
                  ? 'bg-[#123E70] text-[#FFD36A] font-semibold'
                  : 'text-[#A9B6C7] hover:text-white hover:bg-[#0B1B32]'
              }`}
            >
              <span className="truncate">{dest.country}</span>
              <span className="text-[10px] opacity-75 shrink-0 ml-1">{dest.seaTransitDays.split(' ')[0]}d</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
