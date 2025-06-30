import Header from "@/components/Header/Header";
import { getAulaById } from "@/lib/aulas"; -> Simulando puxando dados da aula
import { ParamsProps } from "@/types/types";
import React from "react";

export default async function AulaPage({ params }: ParamsProps) {
  const { aulaId } = await params;
  const aula = await getAulaById(aulaId);
  if (!aula) return <p> Aula não encontrada </p>;

  return (
    <>
      <Header>
        <h1>Você está na {aulaId}</h1>
      </Header>
      <section>
        <video controls src={aula.videoUrl} width="100%" />
        <p>{aula.descricao}</p>
        <p> Teste aqui </p>
      </section>
    </>
  );
}
