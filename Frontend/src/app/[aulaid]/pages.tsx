import ButtonNavigation from "@/components/ButtonNavigation/ButtonNavigation";
import React from "react";

interface NavigationButton {
  id: number;
  url: string;
  text: string;
}

interface AulaIdProps {
  buttons?: NavigationButton[];
}

export default function aulaId({ buttons = [] }: AulaIdProps) {
  return (
    <article className="flex w-1/2 p-4 gap-x-12">
      {buttons.map((button) => (
        <ButtonNavigation key={button.id} URL={button.url} Text={button.text} />
      ))}
    </article>
  );
}
