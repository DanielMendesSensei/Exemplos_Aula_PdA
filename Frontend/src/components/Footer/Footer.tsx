import Link from "next/link";
import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  const data = new Date();
  return (
    <footer className={style.footer}>
      <p>©copyright {data.getFullYear()} - PdA</p>
      <p>
        Made by
        <Link href="https://github.com/DanielMendesSensei" target="_blank">
          Daniel Mendes
        </Link>
        - PdA
      </p>
    </footer>
  );
}
