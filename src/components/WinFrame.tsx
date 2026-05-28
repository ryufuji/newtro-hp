type Props = {
  title: string;
  hint?: string;
  className?: string;
  variant?: "light" | "dark";
  dotColors?: [string, string, string];
  children: React.ReactNode;
  scanlines?: boolean;
  noise?: boolean;
};

export function WinFrame({
  title,
  hint,
  className = "",
  variant = "light",
  dotColors = ["#ff5f56", "#ffbd2e", "#27c93f"],
  children,
  scanlines = true,
  noise = true,
}: Props) {
  return (
    <div
      className={`win-frame overflow-hidden ${
        variant === "dark" ? "bg-ink text-paper" : ""
      } ${className}`}
    >
      <div className="win-titlebar">
        <div className="win-dots">
          <span style={{ background: dotColors[0] }} />
          <span style={{ background: dotColors[1] }} />
          <span style={{ background: dotColors[2] }} />
        </div>
        <span>{title}</span>
        {hint && (
          <span className="ml-auto opacity-70 truncate max-w-[40%]">{hint}</span>
        )}
      </div>
      <div
        className={`relative ${scanlines ? "scanlines" : ""} ${noise ? "noise" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
