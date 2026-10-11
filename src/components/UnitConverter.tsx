import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, Info } from 'lucide-react';

export const UnitConverter: React.FC = () => {
  const [gsm, setGsm] = useState<string>('440');
  const [oz, setOz] = useState<string>('12.98');
  const [stateType, setStateType] = useState<'finished' | 'loom' | 'washed'>('finished');

  const FACTOR = 33.9057;

  const handleGsmChange = (val: string) => {
    setGsm(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setOz((num / FACTOR).toFixed(2));
    } else {
      setOz('');
    }
  };

  const handleOzChange = (val: string) => {
    setOz(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setGsm(Math.round(num * FACTOR).toString());
    } else {
      setGsm('');
    }
  };

  const numericOz = parseFloat(oz) || 0;
  let weightClass = 'Medium Weight (10–12 oz)';
  let recommendation = 'Standard 5-pocket jeans, casual denim jackets, chino-style trousers.';

  if (numericOz < 10) {
    weightClass = 'Lightweight (<10 oz)';
    recommendation = 'Western denim shirting, summer dresses, skirts, lightweight kids apparel, unstructured blazers.';
  } else if (numericOz >= 10 && numericOz < 12) {
    weightClass = 'Medium Weight (10–12 oz)';
    recommendation = 'Everyday jeans, comfortable all-season jackets, casual stretch denim trousers.';
  } else if (numericOz >= 12 && numericOz < 14) {
    weightClass = 'Mid-to-Heavy (12–14 oz)';
    recommendation = 'Core authentic denim jeans, structured trucker jackets, raw selvedge, heritage work shirts.';
  } else if (numericOz >= 14 && numericOz < 16) {
    weightClass = 'Heavyweight (14–16 oz)';
    recommendation = 'Heavy winter jeans, heritage motorcycle apparel, high-contrast honeycomb fade styles, utility bags.';
  } else if (numericOz >= 16) {
    weightClass = 'Super-Heavyweight (>16 oz)';
    recommendation = 'Artisanal armour-weight jeans, extreme heavy utility apparel, rugged upholstery, collector denim pieces.';
  }

  return (
    <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-6 shadow-xl text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#174A7E]/40 pb-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-[#F5A623]" />
            <span>Fabric Weight Classification & Conversion Calculator</span>
          </h3>
          <p className="text-xs text-[#A9B6C7] mt-0.5">
            Real-time conversion according to standard textile metric equation (1 oz/yd² = 33.9057 GSM).
          </p>
        </div>

        {/* State selector */}
        <div className="flex items-center gap-1 bg-[#071426] p-1 rounded-lg border border-[#174A7E]/40 text-xs">
          <button
            onClick={() => setStateType('loom')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              stateType === 'loom' ? 'bg-[#123E70] text-[#FFD36A]' : 'text-[#A9B6C7] hover:text-white'
            }`}
          >
            Loom-State
          </button>
          <button
            onClick={() => setStateType('finished')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              stateType === 'finished' ? 'bg-[#123E70] text-[#FFD36A]' : 'text-[#A9B6C7] hover:text-white'
            }`}
          >
            Finished Fabric
          </button>
          <button
            onClick={() => setStateType('washed')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              stateType === 'washed' ? 'bg-[#123E70] text-[#FFD36A]' : 'text-[#A9B6C7] hover:text-white'
            }`}
          >
            Post-Garment Wash
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* GSM input */}
        <div className="bg-[#071426] p-4 rounded-xl border border-[#174A7E]/50">
          <label className="block text-xs font-semibold text-[#A9B6C7] uppercase tracking-wider mb-2">
            Gram per Square Metre (GSM)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={gsm}
              onChange={(e) => handleGsmChange(e.target.value)}
              placeholder="e.g. 466"
              className="bg-[#0B1B32] border border-[#F5A623]/40 rounded-lg px-3.5 py-2.5 text-lg font-mono font-bold text-white focus:outline-none focus:border-[#FFD36A] w-full"
            />
            <span className="text-xs font-mono text-[#FFD36A] shrink-0 font-bold">g/m²</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Standard international ISO 3801 unit.
          </p>
        </div>

        {/* Oz input */}
        <div className="bg-[#071426] p-4 rounded-xl border border-[#174A7E]/50">
          <label className="block text-xs font-semibold text-[#A9B6C7] uppercase tracking-wider mb-2">
            Ounces per Square Yard (oz/yd²)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.1"
              value={oz}
              onChange={(e) => handleOzChange(e.target.value)}
              placeholder="e.g. 13.75"
              className="bg-[#0B1B32] border border-[#F5A623]/40 rounded-lg px-3.5 py-2.5 text-lg font-mono font-bold text-white focus:outline-none focus:border-[#FFD36A] w-full"
            />
            <span className="text-xs font-mono text-[#FFD36A] shrink-0 font-bold">oz/yd²</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Traditional US/UK denim trade weight benchmark.
          </p>
        </div>
      </div>

      {/* Classification Result Card */}
      <div className="bg-gradient-to-r from-[#071426] to-[#0A1F3A] border border-[#F5A623]/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-[#A9B6C7]">
            Calculated Weight Classification ({stateType === 'finished' ? 'Finished Mill State' : stateType === 'loom' ? 'Loom-State Greige' : 'Garment Washed'})
          </div>
          <div className="text-lg font-bold text-[#FFD36A] mt-0.5">{weightClass}</div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            <strong className="text-white">Recommended Applications: </strong>
            {recommendation}
          </p>
        </div>

        <div className="shrink-0 bg-[#123E70]/50 border border-[#174A7E] px-4 py-2 rounded-lg text-center">
          <div className="text-[10px] text-[#A9B6C7] uppercase">Equivalence Ratio</div>
          <div className="text-xs font-mono font-bold text-white mt-0.5">1 oz ≈ 33.91 g/m²</div>
        </div>
      </div>
    </div>
  );
};
