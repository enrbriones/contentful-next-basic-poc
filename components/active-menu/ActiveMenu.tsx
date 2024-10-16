"use client";

import Link from "next/link";

import style from "./ActiveMenu.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveMenu = ({ path, text }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`${style.link} ${pathName === path && style["active-link"]}`}
      >
        {text}
      </Link>
    </li>
  );
};
