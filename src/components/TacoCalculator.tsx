import React, { useState } from 'react';
import { Flame, Beef, Sparkles, Check, HelpCircle } from 'lucide-react';

interface TacoCalculatorProps {
  onExploreTacoCaterers: () => void;
}

export const TacoCalculator: React.FC<TacoCalculatorProps> = ({ onExploreTacoCaterers }) => {
  const [guestCount, setGuestCount] = useState<number>(40);
  const [appetite, setAppetite] = useState<'light' | 'standard' | 'hearty'>('standard');
  const [includeSides, setIncludeSides] = useState<boolean>(true);

  // Math models based on professional LA taquero standards:
  // Light: 2.5 tacos/person | Standard: 3.5 tacos/person | Hearty: 4.5 tacos/person
  const tacoMultipliers = { light: 2.5, standard: 3.5, hearty: 4.5 };
  const totalTacos = Math.round(guestCount * tacoMultipliers[appetite]);

  // Protein calculation: ~0.33 to 0.45 lbs of cooked protein per person
  const meatPerPerson = appetite === 'light' ? 0.32 : appetite === 'standard' ? 0.42 : 0.52;
  const totalMeatLbs = Math.round(guestCount * meatPerPerson);
  const carneAsadaLbs = Math.round(totalMeatLbs * 0.45);
  const polloAsadoLbs = Math.round(totalMeatLbs * 0.35);
  const alPastorLbs = Math.max(1, totalMeatLbs - carneAsadaLbs - polloAsadoLbs);

  // Tortillas (with buffer for breaks): ~1.2 per taco
  const totalTortillas = Math.round(totalTacos * 1.15);

  // Salsas & condiments
  const salsaQuarts = (guestCount * 0.08).toFixed(1);
  const cilantroBunches = Math.max(2, Math.ceil(guestCount / 15));
  const onionsCount = Math.max(2, Math.ceil(guestCount / 12));
  const limesCount = Math.max(6, Math.ceil(guestCount * 0.75));

  return (
    <div className="bg-white rounded-2xl shadow-md border border-amber-200/80 p-6 max-w-4xl mx-auto my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            LA Host Planning Tool
          </div>
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            Interactive LA Taco Bar Portion Calculator
          </h3>
          <p className="text-xs text-gray-600">
            Estimate exact taco counts, meat poundage, and toppings for backyard fiestas and corporate mixers.
          </p>
        </div>
        <button
          onClick={onExploreTacoCaterers}
          className="shrink-0 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-lg border border-amber-200 transition"
        >
          View 11+ LA Taco Caterers &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Guest Count: <span className="text-amber-700 text-sm font-extrabold">{guestCount}</span>
            </label>
            <input
              type="range"
              min="15"
              max="250"
              step="5"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium">
              <span>15 guests</span>
              <span>100</span>
              <span>250 guests</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Crowd Appetite
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['light', 'standard', 'hearty'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setAppetite(level)}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg capitalize border transition ${
                    appetite === level
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center text-xs text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSides}
                onChange={(e) => setIncludeSides(e.target.checked)}
                className="mr-2 accent-amber-600 rounded-sm"
              />
              <span className="font-medium">Include Mexican Rice & Refried Beans</span>
            </label>
          </div>
        </div>

        {/* Results breakdown */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 flex flex-col justify-between">
            <span className="text-[11px] uppercase font-bold text-amber-900">Total Tacos</span>
            <div className="text-2xl font-black text-amber-800">{totalTacos}</div>
            <span className="text-[10px] text-amber-900">~{tacoMultipliers[appetite]} tacos per guest</span>
          </div>

          <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 flex flex-col justify-between">
            <span className="text-[11px] uppercase font-bold text-amber-900">Total Meat Needed</span>
            <div className="text-2xl font-black text-amber-800">{totalMeatLbs} lbs</div>
            <span className="text-[10px] text-amber-900">Cooked protein weight</span>
          </div>

          <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex flex-col justify-between">
            <span className="text-[11px] uppercase font-bold text-gray-600">Tortilla Pack Count</span>
            <div className="text-2xl font-black text-gray-800">{totalTortillas}</div>
            <span className="text-[10px] text-gray-500">Includes safety buffer</span>
          </div>

          {/* Meat breakdown */}
          <div className="col-span-2 sm:col-span-3 bg-white p-4 rounded-xl border border-gray-200 text-xs">
            <div className="font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              <Beef className="w-4 h-4 text-amber-600" />
              Suggested Protein Distribution (LA Standard Trio)
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-50 p-2 rounded-lg">
                <span className="text-[11px] text-gray-500 block">Carne Asada</span>
                <span className="font-bold text-gray-900 text-sm">{carneAsadaLbs} lbs</span>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <span className="text-[11px] text-gray-500 block">Pollo Asado</span>
                <span className="font-bold text-gray-900 text-sm">{polloAsadoLbs} lbs</span>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <span className="text-[11px] text-gray-500 block">Al Pastor / Carnitas</span>
                <span className="font-bold text-gray-900 text-sm">{alPastorLbs} lbs</span>
              </div>
            </div>

            {includeSides && (
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-600">
                <span>&bull; <strong>Salsa Verde & Roja:</strong> ~{salsaQuarts} quarts each</span>
                <span>&bull; <strong>Limes:</strong> {limesCount} halves</span>
                <span>&bull; <strong>Rice & Beans:</strong> {Math.ceil(guestCount / 30)} half-steam pan(s) each</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
