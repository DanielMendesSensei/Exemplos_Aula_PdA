import React from "react";

interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return (
    <nav className="flex flex-wrap gap-4 justify-center py-6">
      {children}
    </nav>
  );
}