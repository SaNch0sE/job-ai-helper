"use client";

import NavBarCenterContent from "@/components/navbar/center-content";
import NavBarMenu from "@/components/navbar/menu";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  User,
} from "@nextui-org/react";
import { useState } from "react";

export default function BaseNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position="static">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">AI Helper</p>
      </NavbarBrand>
      <NavBarCenterContent />
      <NavbarContent justify="end">
        <NavbarItem>
          <User
            className="mt-2"
            name="Example User"
            description="Product Designer"
          />
        </NavbarItem>
      </NavbarContent>
      <NavBarMenu />
    </Navbar>
  );
}
