import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="flex  justify-center w-full mt-9">
        <NavbarItem className="flex gap-2 justify-center w-full">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
