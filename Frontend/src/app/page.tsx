import ButtonNavigation from "@/components/ButtonNavigation/ButtonNavigation";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu";
import Config from "@/utils/config";

export default function Home() {
  const modulos = Array.from(new Set(Config().map((item) => item.moduloId)))
    .map(Number)
    .sort((a, b) => a - b)
    .map(String);

  return (
    <>
      <Header>
        <h1>Exemplos de Aula PdA</h1>
        <p>
          Olá! Navegue pelos módulos para encontrar os exemplos feitos em aula.
        </p>
      </Header>
      <Menu aria-label="Navegação dos Módulos">
        {modulos.length === 0 ? (
          <span>Nenhum módulo disponivel no momento.</span>
        ) : (
          modulos.map((modulo) => (
            <ButtonNavigation
              key={modulo}
              URL={`/${modulo}`}
              Text={`Módulo ${modulo}`}
            />
          ))
        )}
      </Menu>
    </>
  );
}
