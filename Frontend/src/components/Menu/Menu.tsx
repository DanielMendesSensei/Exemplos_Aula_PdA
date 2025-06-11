import React from "react";
import style from "./Menu.module.css";
interface MenuProps {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return <section className={style.menu}>{children}</section>;
};

export default Menu;
