import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  ChartPieIcon,
  BeakerIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const profileMenuItems = [
  {
    label: "Sair",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const { data: session, status } = useSession();

  const router = useRouter();

  const logOut = () => {
    closeMenu();
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="[#7678ee]"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <ChevronDownIcon
            strokeWidth={2.5}
            color="#7678ee"
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 z-[100]">
        <MenuItem className="flex items-center gap-2">
          <Typography variant="small" className="font-medium">
            Olá, {session?.user?.user?.name}
          </Typography>
        </MenuItem>
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={label === "Sair" ? logOut : closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color="inherit"
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}


function NavList() {
  
  const router = useRouter();
  const pathname = usePathname();
  
  const navListItems = [
    {
      label: "Dashboard",
      icon: ChartPieIcon,
      path: "/dashboard",
    },
    {
      label: "Amostras",
      icon: BeakerIcon,
      path: "/samples",
    },
  ];

  const background = (path) => {
    return pathname === path ? "bg-[#7678ee20]" : "";
  };
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
          onClick={() => router.push(path)}
        >
          <MenuItem className={`flex items-center gap-2 lg:rounded-full py-2 ${background(path)}`}>
            {React.createElement(icon, { className: "h-[18px] w-[18px] text-[#7678ee]" })}{" "}
            <span className="text-[#7678ee]"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  const router = useRouter();

  return (
    <Navbar className="mx-auto w-5/6 p-2 lg:rounded-full lg:pl-6 relative mt-3 left-0 right-0 z-50">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <button onClick={() => router.push("/dashboard")} className="flex items-center gap-2 mr-2">
          <Image
            alt="Imagem"
            height={40}
            src="/img/logo.png"
            width={25}
          />
        </button>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="[#7678ee]"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}