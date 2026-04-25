type Props = {
  className?: string;
  hover?: boolean;
};

export function Rocket({ className = "", hover = true }: Props) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        animation: hover ? "hover-rocket 4s ease-in-out infinite" : undefined,
      }}
      aria-label="NewTro rocket logo"
    >
      <line
        x1="100"
        y1="6"
        x2="100"
        y2="34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="6" r="4" fill="currentColor" />
      <path
        d="M75 50 Q100 24 125 50 L125 88 L75 88 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M70 88 L130 88 L130 200 L70 200 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="100"
        cy="120"
        r="22"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <line
        x1="86"
        y1="106"
        x2="114"
        y2="134"
        stroke="currentColor"
        strokeWidth="3"
      />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 100 + Math.cos(rad) * 18;
        const y = 120 + Math.sin(rad) * 18;
        return (
          <circle
            key={deg}
            cx={x}
            cy={y}
            r="1.6"
            fill="currentColor"
          />
        );
      })}
      {[
        [80, 92],
        [100, 92],
        [120, 92],
        [80, 168],
        [100, 168],
        [120, 168],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="currentColor" />
      ))}
      <path
        d="M70 170 L40 230 L70 220 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M130 170 L160 230 L130 220 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M85 200 L85 240 L100 270 L115 240 L115 200 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
