"use client";

import { useMemo, useState } from "react";

const aminoAcids = ["A", "L", "P", "H", "A", "F", "O", "L", "D"];

export default function ProteinFoldWidget() {
  const [fold, setFold] = useState(70);
  const [rotation, setRotation] = useState(12);

  const points = useMemo(() => {
    const progress = fold / 100;
    return aminoAcids.map((_, index) => {
      const lineX = 34 + index * 31;
      const waveY = 92 + Math.sin(index * 1.5 + progress * 3) * 34 * progress;
      const spiralX = 155 + Math.cos(index * 1.38 + rotation / 25) * (28 + index * 1.8) * progress;
      const spiralY = 92 + Math.sin(index * 1.38 + rotation / 25) * (24 + index * 1.6) * progress;

      return {
        x: lineX * (1 - progress) + spiralX * progress,
        y: 92 * (1 - progress) + waveY * progress * (1 - progress) + spiralY * progress,
      };
    });
  }, [fold, rotation]);

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  return (
    <section className="not-prose my-10 overflow-hidden border border-border bg-white">
      <div className="grid gap-0 md:grid-cols-[1fr_220px]">
        <div className="bg-surface/60 p-4 sm:p-6">
          <svg
            viewBox="0 0 320 184"
            role="img"
            aria-label="Interactive amino acid sequence folding into a compact protein structure"
            className="h-auto w-full"
          >
            <path d={path} fill="none" stroke="#1a237e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.84" />
            <path d={path} fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
            {points.map((point, index) => (
              <g key={`${aminoAcids[index]}-${index}`}>
                <circle cx={point.x} cy={point.y} r="10" fill={index % 2 ? "#f59e0b" : "#14b8a6"} stroke="#ffffff" strokeWidth="3" />
                <text x={point.x} y={point.y + 4} textAnchor="middle" className="fill-white text-[10px] font-bold">
                  {aminoAcids[index]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="border-t border-border p-4 sm:p-5 md:border-l md:border-t-0">
          <p className="font-sans text-[0.8125rem] font-semibold uppercase tracking-wide text-ink">
            Sequence to structure
          </p>
          <div className="mt-5 space-y-5">
            <label className="block font-sans text-label-sm text-muted">
              Fold progress
              <input
                type="range"
                min="0"
                max="100"
                value={fold}
                onChange={(event) => setFold(Number(event.target.value))}
                className="mt-2 w-full accent-navy"
              />
            </label>
            <label className="block font-sans text-label-sm text-muted">
              Rotate view
              <input
                type="range"
                min="0"
                max="100"
                value={rotation}
                onChange={(event) => setRotation(Number(event.target.value))}
                className="mt-2 w-full accent-navy"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
