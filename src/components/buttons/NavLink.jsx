"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, ...rest }) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      href={href}
      {...rest}
      className={`${isActive ? "text-primary font-bold" : ""} ${
        rest.className || ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
