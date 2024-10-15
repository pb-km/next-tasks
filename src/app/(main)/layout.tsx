import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";

interface Props {
  children: React.ReactNode;
}

/**
 * メインページ
 * @param param0 メインページのパラメータ
 * @returns メインページのコンポーネント
 */
const MainLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
