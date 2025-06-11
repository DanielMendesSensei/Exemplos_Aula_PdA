import Link from "next/link";
import React from "react";
import style from "./ButtonNavigation.module.css";
interface ButtonNavigationProps {
  URL: string;
  Text: string;
}

const ButtonNavigation = ({ URL, Text }: ButtonNavigationProps) => {
  return (
    <Link href={URL} className={style.link}>
      {Text}
    </Link>
  );
};

export default ButtonNavigation;
