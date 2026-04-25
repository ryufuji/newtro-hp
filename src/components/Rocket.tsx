import Image from "next/image";

type Props = {
  className?: string;
  hover?: boolean;
  priority?: boolean;
};

// 公式イラスト（OMATSURI 松尾陽介氏）。/public/rocket.png に配置。
export function Rocket({ className = "", hover = true, priority = false }: Props) {
  return (
    <div
      className={className}
      style={{
        animation: hover ? "hover-rocket 4s ease-in-out infinite" : undefined,
        aspectRatio: "1000 / 1476",
        position: "relative",
      }}
      aria-label="NewTro rocket"
    >
      <Image
        src="/rocket.png"
        alt="NewTro rocket"
        fill
        priority={priority}
        sizes="(max-width: 640px) 50vw, 280px"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
