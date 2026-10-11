import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[#0B1B32] border border-[#174A7E]/40 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between animate-pulse">
      {/* Top Image Box Skeleton */}
      <div>
        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#071426] via-[#102A4C] to-[#071426] overflow-hidden">
          {/* Subtle shimmer scan line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#174A7E]/20 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />

          {/* Top Bar Skeleton Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <div className="h-6 w-20 bg-[#123E70]/70 rounded" />
            <div className="h-6 w-16 bg-[#071426]/70 rounded" />
          </div>

          {/* Bottom Badge inside Image Skeleton */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
            <div className="h-5 w-24 bg-[#071426]/80 rounded" />
            <div className="h-5 w-28 bg-[#123E70]/80 rounded" />
          </div>
        </div>

        {/* Content Body Skeleton */}
        <div className="p-4 space-y-3">
          <div className="h-3 w-28 bg-[#123E70]/60 rounded" />
          <div className="h-4.5 w-4/5 bg-slate-700/60 rounded" />
          
          <div className="space-y-1.5 pt-1">
            <div className="h-3 w-full bg-[#123E70]/40 rounded" />
            <div className="h-3 w-3/4 bg-[#123E70]/40 rounded" />
          </div>

          {/* Technical Specs Key Values Skeleton */}
          <div className="mt-3 pt-3 border-t border-[#174A7E]/40 grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <div className="h-2.5 w-14 bg-slate-600/40 rounded" />
              <div className="h-3 w-24 bg-[#123E70]/70 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-2.5 w-14 bg-slate-600/40 rounded" />
              <div className="h-3 w-20 bg-[#123E70]/70 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-2.5 w-14 bg-slate-600/40 rounded" />
              <div className="h-3 w-22 bg-[#123E70]/70 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-2.5 w-14 bg-slate-600/40 rounded" />
              <div className="h-3 w-16 bg-[#123E70]/70 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer Skeleton */}
      <div className="p-4 pt-0 flex items-center gap-2">
        <div className="h-8 flex-1 bg-[#123E70]/60 rounded-lg" />
        <div className="h-8 w-20 bg-[#D96A16]/50 rounded-lg" />
      </div>
    </div>
  );
};

export const ProductTableSkeleton: React.FC<{ rows?: number }> = ({ rows = 6 }) => {
  return (
    <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl overflow-x-auto shadow-xl">
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="border-b border-[#174A7E] bg-[#071426] text-[#FFD36A] uppercase tracking-wider text-[11px]">
            <th className="p-3">SKU Code</th>
            <th className="p-3">Fabric Quality Name</th>
            <th className="p-3">Weight (oz / GSM)</th>
            <th className="p-3">Fibre Composition</th>
            <th className="p-3">Weave</th>
            <th className="p-3">Stretch</th>
            <th className="p-3">Width</th>
            <th className="p-3">MOQ</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#174A7E]/30 animate-pulse">
          {Array.from({ length: rows }).map((_, idx) => (
            <tr key={idx} className="bg-[#071426]/30">
              <td className="p-3"><div className="h-4 w-16 bg-[#123E70]/70 rounded" /></td>
              <td className="p-3"><div className="h-4 w-36 bg-slate-700/60 rounded" /></td>
              <td className="p-3"><div className="h-4 w-24 bg-[#123E70]/50 rounded" /></td>
              <td className="p-3"><div className="h-4 w-28 bg-slate-700/50 rounded" /></td>
              <td className="p-3"><div className="h-4 w-16 bg-[#123E70]/50 rounded" /></td>
              <td className="p-3"><div className="h-4 w-14 bg-slate-700/50 rounded" /></td>
              <td className="p-3"><div className="h-4 w-10 bg-[#123E70]/50 rounded" /></td>
              <td className="p-3"><div className="h-4 w-12 bg-slate-700/50 rounded" /></td>
              <td className="p-3 text-right">
                <div className="inline-flex gap-1.5">
                  <div className="h-6 w-16 bg-[#123E70]/60 rounded" />
                  <div className="h-6 w-14 bg-[#D96A16]/50 rounded" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
