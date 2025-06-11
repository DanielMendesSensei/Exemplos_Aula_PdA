"use client";
import ButtonNavigation from "@/components/ButtonNavigation/ButtonNavigation";
import Card from "@/components/card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import "./page.module.css";

import React from "react";

const TextoSaudacao: string =
  "Olá Bem vindo! Navegue pelos módulos e aulas para encontrar os exemplos feitos em aula ";

const Home = () => {
  return (
    <>
      <Header>
        <h1>{TextoSaudacao}</h1>
      </Header>
      <Menu>
        <ButtonNavigation URL="/M0" Text="M0" />
        <ButtonNavigation URL="/M1" Text="M1" />
        <ButtonNavigation URL="/M2" Text="M2" />
        <ButtonNavigation URL="/M3" Text="M3" />
        <ButtonNavigation URL="/M4" Text="M4" />
        <ButtonNavigation URL="/M6" Text="M5" />
      </Menu>
      <Footer />
    </>
  );
};

export default Home;
