import Link from "next/link";
import Image from "next/image";
import { useId } from "react";

export type IconNavProps = {
  href: string;
  label: string;
  iconSrc: string; // 아이콘 이미지만 받도록
  arcText?: string; // 원호 텍스트 (기본 label)
  active?: boolean;
  arcOffsetPx?: number;
};

export const IconNav = ({
  href,
  label,
  iconSrc,
  arcText = label,
  active,
  arcOffsetPx = 26,
}: IconNavProps) => {
  const id = useId(); // textPath 고유 id

  return (
    <Link
      href={href}
      aria-label={label}
      className="relative inline-block ml-1"
      //   className={`relative grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 overflow-hidden  ${
      //     active ? "ring-2 ring-white/60" : ""
      //   }`}
    >
      <span
        className={`relative grid h-10 w-10 place-items-center rounded-full 
        border border-white/20 bg-white/10 transition hover:bg-white/20 overflow-hidden 
        ${active ? "ring-2 ring-white/60" : ""}`}
      >
        <span className="sr-only">{label}</span>
        <Image
          src={iconSrc}
          alt=""
          fill
          className="object-contain scale-[1.25] pointer-events-none"
        />
      </span>
      {/* 아치 텍스트*/}
      <svg
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{ top: -arcOffsetPx }}
        width="56" // 60 → 56 (조금 컴팩트)
        height="72" // 30 → 24 (세로 높이 축소)
        viewBox="0 0 56 24"
        aria-hidden="true"
      >
        <defs>
          <path id={`arc-${id}`} d="M4,20 A24,24 0 0,1 52,20" />
        </defs>
        <text
          className="fill-current  fill-white"
          fontSize="14"
          letterSpacing="-.02em"
        >
          <textPath
            href={`#arc-${id}`}
            startOffset="50%"
            textAnchor="middle"
            dy="-1"
          >
            {arcText}
          </textPath>
        </text>
      </svg>
    </Link>
  );
};
