"use client";

import type { AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";

export function StaticLink({ href, className = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname ? pathname.startsWith(href) : false;

  const combinedClassName = `${className} ${isActive ? "active" : ""}`.trim();

  return (
    <a
      href={href}
      className={combinedClassName}
      aria-current={isActive ? "page" : undefined}
      {...props}
    />
  );
}
