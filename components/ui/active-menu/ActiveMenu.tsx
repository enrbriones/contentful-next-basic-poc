"use client";

import Link from "next/link";

import style from "./ActiveMenu.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  toggleMenu: () => void;
}

export const ActiveMenu = ({ path, text, toggleMenu }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`${style.link} ${pathName === path && style["active-link"]}`}
        onClick={toggleMenu}
      >
        {text}
      </Link>
    </li>
  );
};
