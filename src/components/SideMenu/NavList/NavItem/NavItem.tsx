'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname()
  const activeClassName = pathname === link ? 'bg-gray-600 border-r-4 border-r-pink-500': '';
  return (
    <Link href={link} className={'flex p-4 items-center w-full hover:bg-gray-700 font-medium ' + activeClassName}>
      <div>{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
