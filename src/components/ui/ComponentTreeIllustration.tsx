import { useInView } from 'react-intersection-observer'

/** Pure SVG design-system component-tree illustration — no image deps, no runtime cost. */
export function ComponentTreeIllustration() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const lineStyle = (delay: number): React.CSSProperties => ({
    strokeDasharray: 600,
    strokeDashoffset: inView ? 0 : 600,
    transition: `stroke-dashoffset 0.7s ease-out ${delay}ms`,
  })

  const nodes = [
    { label: 'Button', x: 38,  cx: 76,  bg: '#EEF2FF', stroke: '#C7D2FE', text: '#4338CA' },
    { label: 'Card',   x: 130, cx: 168, bg: '#F0F9FF', stroke: '#BAE6FD', text: '#0284C7' },
    { label: 'Badge',  x: 222, cx: 260, bg: '#F0FDF4', stroke: '#BBF7D0', text: '#059669' },
    { label: 'Input',  x: 314, cx: 352, bg: '#FFFBEB', stroke: '#FDE68A', text: '#D97706' },
    { label: 'Avatar', x: 406, cx: 444, bg: '#FDF4FF', stroke: '#E9D5FF', text: '#7C3AED' },
  ]

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Design system component tree illustration"
        className="w-full"
      >
        {/* ── Chrome outer frame ─────────────────────────────────────── */}
        <rect x="0.5" y="0.5" width="519" height="399" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* ── Toolbar background ─────────────────────────────────────── */}
        <path d="M1 12 Q1 1 12 1 L508 1 Q519 1 519 12 L519 48 L1 48 Z" fill="#F9FAFB" />
        <line x1="1" y1="48.5" x2="519" y2="48.5" stroke="#E5E7EB" strokeWidth="1" />

        {/* Traffic lights */}
        <circle cx="24" cy="25" r="6" fill="#FF5F57" />
        <circle cx="44" cy="25" r="6" fill="#FEBC2E" />
        <circle cx="64" cy="25" r="6" fill="#28C840" />

        {/* URL bar */}
        <rect x="90" y="13" width="240" height="22" rx="6" fill="#F3F4F6" />
        <text x="210" y="28" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontFamily="ui-monospace, monospace">
          design-system.dev
        </text>

        {/* Tab label (top-right) */}
        <rect x="380" y="13" width="110" height="22" rx="4" fill="#EEF2FF" />
        <text x="435" y="28" textAnchor="middle" fill="#4F46E5" fontSize="10" fontWeight="600">
          Components ↗
        </text>

        {/* ── Content area ───────────────────────────────────────────── */}

        {/* Root "Design System" box */}
        <rect x="175" y="70" width="170" height="40" rx="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
        <text x="260" y="86" textAnchor="middle" fill="#4F46E5" fontSize="11" fontWeight="700">
          Design System
        </text>
        <text x="260" y="101" textAnchor="middle" fill="#818CF8" fontSize="9">
          v3.8.0  •  42 components
        </text>

        {/* ── Connector lines ────────────────────────────────────────── */}

        {/* Main stem */}
        <line x1="260" y1="110" x2="260" y2="162" stroke="#C7D2FE" strokeWidth="1.5" style={lineStyle(0)} />

        {/* Horizontal bus */}
        <line x1="76" y1="162" x2="444" y2="162" stroke="#C7D2FE" strokeWidth="1.5" style={lineStyle(80)} />

        {/* Vertical drops */}
        {nodes.map((n, i) => (
          <line
            key={n.label}
            x1={n.cx} y1="162"
            x2={n.cx} y2="208"
            stroke="#C7D2FE"
            strokeWidth="1.5"
            style={lineStyle(160 + i * 50)}
          />
        ))}

        {/* ── Child nodes ────────────────────────────────────────────── */}
        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x} y="208" width="76" height="34" rx="7"
              fill={n.bg} stroke={n.stroke} strokeWidth="1.5"
            />
            <text
              x={n.cx} y="230" textAnchor="middle"
              fill={n.text} fontSize="11" fontWeight="600"
            >
              {n.label}
            </text>
            {/* Simulated prop lines */}
            <rect x={n.x + 8} y="252" width="60" height="5" rx="2.5" fill="#F3F4F6" />
            <rect x={n.x + 8} y="263" width="44" height="5" rx="2.5" fill="#F3F4F6" />
          </g>
        ))}

        {/* ── Prop label on Button node ───────────────────────────────── */}
        <rect x="43" y="279" width="66" height="14" rx="3" fill="#EEF2FF" />
        <text x="76" y="290" textAnchor="middle" fill="#4F46E5" fontSize="7.5" fontWeight="500">
          variant  •  size
        </text>

        {/* ── Tech tags row ──────────────────────────────────────────── */}
        {/* React 19 */}
        <rect x="72" y="318" width="72" height="22" rx="11" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
        <text x="108" y="333" textAnchor="middle" fill="#4338CA" fontSize="9.5" fontWeight="600">
          React 19
        </text>

        {/* TypeScript 5 */}
        <rect x="156" y="318" width="92" height="22" rx="11" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1" />
        <text x="202" y="333" textAnchor="middle" fill="#0284C7" fontSize="9.5" fontWeight="600">
          TypeScript 5
        </text>

        {/* WCAG 2.2 */}
        <rect x="260" y="318" width="82" height="22" rx="11" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
        <text x="301" y="333" textAnchor="middle" fill="#059669" fontSize="9.5" fontWeight="600">
          WCAG 2.2 ✓
        </text>

        {/* Open Source */}
        <rect x="354" y="318" width="86" height="22" rx="11" fill="#FDF4FF" stroke="#E9D5FF" strokeWidth="1" />
        <text x="397" y="333" textAnchor="middle" fill="#7C3AED" fontSize="9.5" fontWeight="600">
          Open Source
        </text>

        {/* ── Floating cursor ────────────────────────────────────────── */}
        <g transform="translate(155, 175)" opacity="0.7">
          <path d="M0 0 L0 14 L4 11 L7 17 L9 16 L6 10 L11 10 Z" fill="#1E293B" />
          <rect x="13" y="2" width="42" height="14" rx="4" fill="#1E293B" />
          <text x="34" y="13" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="500">
            Tokens
          </text>
        </g>

        {/* ── Version badge top-right corner ─────────────────────────── */}
        <text x="500" y="370" textAnchor="end" fill="#D1D5DB" fontSize="9" fontFamily="ui-monospace, monospace">
          @lib/ds
        </text>
      </svg>
    </div>
  )
}
