"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconNav } from "@/components/nav/IconNav";

type NavItem = {
  href: string;
  label: string;
  iconSrc?: string; // 있으면 아이콘 버튼으로 렌더
  arcText?: string; // 아이콘 위에 원형 텍스트
};

const NAV: NavItem[] = [
  { href: "/", label: "All Pokémon" },
  { href: "/favorites", label: "Favorites" },
  {
    href: "/random",
    label: "Random",
    iconSrc: "/icon/icon_ball_c.png",
    arcText: "Random",
  }, // ← 여기만 아이콘
  { href: "/about", label: "About" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 z-50 shadow-md flex items-center justify-between">
      {/* 로고 */}
      <Link href="/" aria-label="Go to home" className="flex items-center">
        <div className="relative h-12 w-44 md:h-12 md:w-56">
          <Image
            src="/main_logo.png"
            alt="Pokémon"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
      {/* 네비게이션 메뉴 */}
      <nav className="hidden md:flex items-center gap-6 pr-4 text-sm font-medium">
        {NAV.map((item) =>
          item.iconSrc ? (
            <IconNav
              key={item.href}
              href={item.href}
              label={item.label}
              iconSrc={item.iconSrc}
              arcText={item.arcText}
              active={pathname === item.href}
            />
          ) : (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={[
                "relative inline-flex items-center text-sm tracking-wide transition-colors",
                pathname === item.href
                  ? "text-white after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-6 after:bg-white after:rounded-full"
                  : "text-blue-100 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          )
        )}
        {/* 검색 모달 열기 */}
        <button
          type="button"
          aria-label="Open search"
          onClick={() => setOpen(true)}
          className="relative ml-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <Image
            src="/icon/icon_search.svg"
            alt=""
            fill // 부모(버튼)를 기준으로 채움
            className="object-contain scale-[1.05] p-2"
            sizes="44px"
            priority
          />
        </button>
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] grid place-items-center bg-black/40"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-md rounded-lg bg-white p-4 text-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 text-lg font-semibold">Search Pokémon</div>
              <input
                autoFocus
                placeholder="Type a name..."
                className="w-full rounded border px-3 py-2 outline-none focus:ring"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
