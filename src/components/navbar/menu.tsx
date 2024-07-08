"use client"

import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { navBarConstants } from "./constants";
import { getActiveColor } from "../button/get-color";

export default function NavBarMenu() {
  const pathname = usePathname();
  
  return (
    <NavbarMenu>
      {navBarConstants.pages.map((page, id) => {
        const active = pathname === page.pathname;

        return (
          <NavbarMenuItem
            key={id}
            isActive={pathname === page.pathname}
          >
          <Link className="w-full" color={getActiveColor(active)} href={page.pathname}>{page.name}</Link>
        </NavbarMenuItem>
        );
      })}
    </NavbarMenu>
  )
}