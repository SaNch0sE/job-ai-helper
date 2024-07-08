"use client"

import { Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { navBarConstants } from "./constants";
import { getActiveColor } from "../button/get-color";

export default function NavBarCenterContent() {
  const pathname = usePathname();
  
  return (
    <NavbarContent justify="center">
      {navBarConstants.pages.map((page, id) => {
        const active = pathname === page.pathname;

        return (
          <NavbarItem
            key={id}
            isActive={pathname === page.pathname}
            className="hidden sm:flex gap-4"
          >
            <Link color={getActiveColor(active)} href={page.pathname}>{page.name}</Link>
          </NavbarItem>
        );
      })}
      </NavbarContent>
  )
}