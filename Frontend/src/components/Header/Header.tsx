import React from "react";
import style from "./Header.module.css";
interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <header className={style.header}>{children}</header>;
};

export default Header;
