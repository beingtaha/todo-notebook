import React from "react";

function DeskScene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Pencil case */}
      <svg
        style={{
          position: "absolute",
          top: 10,
          left: 20,
          transform: "rotate(-6deg)",
        }}
        width="200"
        height="90"
        viewBox="0 0 200 90"
      >
        <rect x="5" y="15" width="190" height="68" rx="12" fill="#2a4a7a" />
        <rect
          x="5"
          y="15"
          width="190"
          height="68"
          rx="12"
          fill="url(#caseGrad)"
        />
        <line
          x1="15"
          y1="36"
          x2="185"
          y2="36"
          stroke="#c8a84c"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="185"
          cy="36"
          r="5"
          fill="#f0d070"
          stroke="#c8a84c"
          strokeWidth="1.5"
        />
        {[30, 50, 70, 90, 110, 130, 150, 170].map((x) => (
          <rect
            key={x}
            x={x}
            y={33}
            width="4"
            height="6"
            rx="1"
            fill="#a08030"
            opacity="0.6"
          />
        ))}
        <rect
          x="15"
          y="18"
          width="170"
          height="8"
          rx="4"
          fill="rgba(255,255,255,0.12)"
        />
        <defs>
          <linearGradient id="caseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pens */}
      <svg
        style={{
          position: "absolute",
          top: -25,
          left: 55,
          transform: "rotate(-5deg)",
        }}
        width="14"
        height="110"
        viewBox="0 0 14 110"
      >
        <rect x="3" y="10" width="8" height="85" rx="3" fill="#1a3a6a" />
        <polygon points="3,95 11,95 7,110" fill="#c0c0c0" />
        <rect x="3" y="10" width="8" height="14" rx="3" fill="#2a5aaa" />
        <rect
          x="4"
          y="12"
          width="3"
          height="10"
          rx="1"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: -30,
          left: 78,
          transform: "rotate(3deg)",
        }}
        width="14"
        height="115"
        viewBox="0 0 14 115"
      >
        <rect x="3" y="10" width="8" height="88" rx="3" fill="#1a6a3a" />
        <polygon points="3,98 11,98 7,115" fill="#c0c0c0" />
        <rect x="3" y="10" width="8" height="14" rx="3" fill="#2aaa5a" />
        <rect
          x="4"
          y="12"
          width="3"
          height="10"
          rx="1"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: -20,
          left: 100,
          transform: "rotate(-2deg)",
        }}
        width="14"
        height="108"
        viewBox="0 0 14 108"
      >
        <rect x="3" y="10" width="8" height="82" rx="3" fill="#222222" />
        <polygon points="3,92 11,92 7,108" fill="#888" />
        <rect x="3" y="10" width="8" height="14" rx="3" fill="#444" />
        <rect
          x="4"
          y="12"
          width="3"
          height="10"
          rx="1"
          fill="rgba(255,255,255,0.2)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: -28,
          left: 122,
          transform: "rotate(5deg)",
        }}
        width="14"
        height="112"
        viewBox="0 0 14 112"
      >
        <rect x="3" y="10" width="8" height="86" rx="3" fill="#8a1a1a" />
        <polygon points="3,96 11,96 7,112" fill="#c0c0c0" />
        <rect x="3" y="10" width="8" height="14" rx="3" fill="#cc3333" />
        <rect
          x="4"
          y="12"
          width="3"
          height="10"
          rx="1"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>

      {/* Eraser */}
      <svg
        style={{
          position: "absolute",
          top: 105,
          left: 40,
          transform: "rotate(12deg)",
        }}
        width="80"
        height="34"
        viewBox="0 0 80 34"
      >
        <rect
          x="2"
          y="2"
          width="76"
          height="30"
          rx="4"
          fill="#f5f0e8"
          stroke="#d4c8b0"
          strokeWidth="1.5"
        />
        <rect x="2" y="18" width="76" height="14" rx="0 0 4 4" fill="#e8ddd0" />
        <text
          x="40"
          y="14"
          textAnchor="middle"
          fontSize="8"
          fill="#8a7a60"
          fontFamily="Patrick Hand, cursive"
          fontWeight="600"
        >
          FABER-CASTELL
        </text>
        <rect
          x="2"
          y="2"
          width="76"
          height="8"
          rx="4 4 0 0"
          fill="rgba(255,255,255,0.4)"
        />
      </svg>

      {/* Markers */}
      <svg
        style={{
          position: "absolute",
          top: 280,
          right: 25,
          transform: "rotate(20deg)",
        }}
        width="28"
        height="160"
        viewBox="0 0 28 160"
      >
        <rect x="4" y="8" width="20" height="130" rx="8" fill="#f5d800" />
        <rect
          x="4"
          y="125"
          width="20"
          height="18"
          rx="0 0 4 4"
          fill="#e0c400"
        />
        <rect x="8" y="130" width="12" height="10" rx="3" fill="#c8a800" />
        <rect x="4" y="8" width="20" height="20" rx="8 8 0 0" fill="#333" />
        <rect
          x="6"
          y="12"
          width="6"
          height="20"
          rx="3"
          fill="rgba(255,255,255,0.25)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: 310,
          right: 55,
          transform: "rotate(15deg)",
        }}
        width="28"
        height="155"
        viewBox="0 0 28 155"
      >
        <rect x="4" y="8" width="20" height="125" rx="8" fill="#ff9eb5" />
        <rect
          x="4"
          y="120"
          width="20"
          height="18"
          rx="0 0 4 4"
          fill="#e8809a"
        />
        <rect x="8" y="125" width="12" height="10" rx="3" fill="#d06080" />
        <rect x="4" y="8" width="20" height="20" rx="8 8 0 0" fill="#333" />
        <rect
          x="6"
          y="12"
          width="6"
          height="18"
          rx="3"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: 260,
          right: 70,
          transform: "rotate(8deg)",
        }}
        width="28"
        height="165"
        viewBox="0 0 28 165"
      >
        <rect x="4" y="8" width="20" height="135" rx="8" fill="#5ac8c8" />
        <rect
          x="4"
          y="130"
          width="20"
          height="18"
          rx="0 0 4 4"
          fill="#40aaaa"
        />
        <rect x="8" y="135" width="12" height="10" rx="3" fill="#308888" />
        <rect x="4" y="8" width="20" height="20" rx="8 8 0 0" fill="#333" />
        <rect
          x="6"
          y="12"
          width="6"
          height="20"
          rx="3"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: 340,
          right: 15,
          transform: "rotate(25deg)",
        }}
        width="28"
        height="152"
        viewBox="0 0 28 152"
      >
        <rect x="4" y="8" width="20" height="122" rx="8" fill="#6adc6a" />
        <rect
          x="4"
          y="118"
          width="20"
          height="18"
          rx="0 0 4 4"
          fill="#50c050"
        />
        <rect x="8" y="123" width="12" height="10" rx="3" fill="#38a038" />
        <rect x="4" y="8" width="20" height="20" rx="8 8 0 0" fill="#333" />
        <rect
          x="6"
          y="12"
          width="6"
          height="18"
          rx="3"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: 255,
          right: 100,
          transform: "rotate(12deg)",
        }}
        width="12"
        height="180"
        viewBox="0 0 12 180"
      >
        <rect x="2" y="5" width="8" height="150" rx="3" fill="#222" />
        <polygon points="2,155 10,155 6,175" fill="#888" />
        <rect x="2" y="5" width="8" height="18" rx="3" fill="#444" />
        <rect
          x="3"
          y="7"
          width="3"
          height="12"
          rx="1"
          fill="rgba(255,255,255,0.2)"
        />
      </svg>

      {/* Water bottle */}
      <svg
        style={{ position: "absolute", top: 0, right: 15 }}
        width="70"
        height="140"
        viewBox="0 0 70 140"
      >
        <rect x="20" y="8" width="32" height="6" rx="3" fill="#d0d8e0" />
        <rect
          x="15"
          y="14"
          width="40"
          height="115"
          rx="12"
          fill="rgba(220,235,245,0.75)"
          stroke="#b0c8d8"
          strokeWidth="1.5"
        />
        <rect
          x="15"
          y="14"
          width="40"
          height="30"
          rx="12 12 0 0"
          fill="rgba(200,220,235,0.6)"
        />
        <rect
          x="18"
          y="20"
          width="10"
          height="80"
          rx="5"
          fill="rgba(255,255,255,0.25)"
        />
        <text
          x="35"
          y="90"
          textAnchor="middle"
          fontSize="7"
          fill="rgba(30,80,120,0.6)"
          fontFamily="Patrick Hand"
        >
          nalgene
        </text>
      </svg>
    </div>
  );
}

export default DeskScene;
