import { Navbar, NavbarBrand, NavbarContent, NavbarItem, User } from "@nextui-org/react";

export default function BaseNavbar() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">AI Helper</p>
      </NavbarBrand>
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