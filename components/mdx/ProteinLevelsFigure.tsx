export default function ProteinLevelsFigure() {
  return (
    <figure className="not-prose my-10">
      <div className="overflow-hidden border border-border bg-white p-4 sm:p-6">
        <svg
          viewBox="0 0 760 360"
          role="img"
          aria-label="Diagram showing the four levels of protein structure from primary to secondary to tertiary to quaternary"
          className="h-auto w-full"
        >
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#9ca3af" />
            </marker>
          </defs>

          {["Primary", "Secondary", "Tertiary", "Quaternary"].map((label, index) => (
            <g key={label} transform={`translate(${index * 190}, 0)`}>
              <rect x="14" y="18" width="160" height="300" fill="#f5f3ef" stroke="#e5e3de" />
              <text x="94" y="52" textAnchor="middle" className="fill-[#111111] text-[20px] font-bold">
                {label}
              </text>
            </g>
          ))}

          <g transform="translate(38 155)">
            {Array.from({ length: 7 }).map((_, index) => (
              <g key={index} transform={`translate(${index * 18}, 0)`}>
                <circle cx="0" cy="0" r="9" fill={index % 2 ? "#f59e0b" : "#14b8a6"} />
                {index < 6 && <line x1="9" y1="0" x2="18" y2="0" stroke="#6b7280" strokeWidth="3" />}
              </g>
            ))}
            <text x="54" y="52" textAnchor="middle" className="fill-[#6b7280] text-[14px]">
              amino acid chain
            </text>
          </g>

          <g transform="translate(232 112)">
            <path d="M0 75 C18 15, 46 15, 64 75 C82 135, 110 135, 128 75" fill="none" stroke="#1a237e" strokeWidth="8" strokeLinecap="round" />
            <path d="M8 196 L40 146 L72 196 L104 146 L136 196" fill="none" stroke="#14b8a6" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
            <text x="68" y="238" textAnchor="middle" className="fill-[#6b7280] text-[14px]">
              helices and sheets
            </text>
          </g>

          <g transform="translate(430 118)">
            <path d="M24 122 C-14 74, 28 20, 78 50 C126 78, 72 130, 126 160 C168 184, 150 232, 94 214 C40 196, 70 150, 24 122 Z" fill="none" stroke="#1a237e" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="78" cy="50" r="12" fill="#f59e0b" />
            <circle cx="126" cy="160" r="12" fill="#14b8a6" />
            <text x="80" y="238" textAnchor="middle" className="fill-[#6b7280] text-[14px]">
              one folded chain
            </text>
          </g>

          <g transform="translate(610 100)">
            <path d="M20 112 C-2 76, 28 40, 66 58 C100 74, 64 116, 106 132 C138 144, 128 184, 88 178 C48 172, 54 134, 20 112 Z" fill="none" stroke="#1a237e" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M66 144 C32 104, 76 72, 112 88 C154 106, 110 154, 150 172 C178 184, 160 226, 116 210 C82 196, 104 164, 66 144 Z" fill="none" stroke="#14b8a6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <text x="88" y="256" textAnchor="middle" className="fill-[#6b7280] text-[14px]">
              multi-subunit complex
            </text>
          </g>

          {[176, 366, 556].map((x) => (
            <line key={x} x1={x} y1="178" x2={x + 30} y2="178" stroke="#9ca3af" strokeWidth="3" markerEnd="url(#arrow)" />
          ))}
        </svg>
      </div>
      <figcaption className="mt-2 font-sans text-label-sm italic text-subtle">
        The four levels of protein structure: primary, secondary, tertiary, and quaternary.
      </figcaption>
    </figure>
  );
}
