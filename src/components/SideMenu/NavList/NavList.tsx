import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem, { NavItemProps } from "./NavItem/NavItem";

/**
 * メニューリスト
 * @returns メニューリストコンポーネント
 */
const NavList = () => {
  const navList: NavItemProps[] = [
    { id: 1, label: 'All Tasks', link: '/', icon: <FaTasks className="size-5" />},
    { id: 2, label: 'Completed Tasks', link: '/completed', icon: <FaRegCheckSquare className="size-5" />},
    { id: 3, label: 'Expired Tasks', link: '/expired', icon: <FaRegClock className="size-5" />}
    
  ];
  return (
    <div className="mt-24">
        {navList.map((item) => (<NavItem key={item.id} {...item} ></NavItem> ))}
    </div>
  );
};

export default NavList;
