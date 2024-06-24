import { Navbar, NavbarBrand, NavbarContent, NavbarItem, User } from "@nextui-org/react";

export default function ProjectsNavbar() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">AI Helper</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          {/* Centered content */}Center
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <User
            className="mt-2"
            name="Example User"
            description="Product Designer"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}