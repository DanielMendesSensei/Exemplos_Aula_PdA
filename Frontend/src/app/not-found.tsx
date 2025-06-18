"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <DotLottieReact src="lottie/404.lottie" loop autoplay />
    </main>
  );
}
