'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  /** ID */
  id: number;
  /** ラベル */
  label: string;
  /** リンク先 */
  link: string;
  /** アイコン */
  icon: React.ReactNode;
}
/**
 * メニュー項目
 * @param param0 パラメータ
 * @returns メニュー項目のコンポーネント
 */
const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname()
  const activeClassName = pathname === link ? 'bg-gray-600 border-r-4 border-r-pink-500': '';
  return (
    <Link href={link} className={'flex p-4 items-center w-full hover:bg-gray-700 font-medium ' + activeClassName}>
      <div className="mr-2">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
