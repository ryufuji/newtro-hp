type Props = {
  index: string;
  title: string;
  hint?: string;
};

export function SectionBar({ index, title, hint }: Props) {
  return (
    <div className="section-bar">
      <span className="opacity-70">[{index}]</span>
      <span>{title}</span>
      {hint && <span className="ml-auto opacity-70 truncate">{hint}</span>}
    </div>
  );
}
