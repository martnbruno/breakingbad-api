import { useState, useEffect } from "react";
import Frase from "./Frase";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 10rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  &:hover {
    cursor: pointer;
    background-size: 400px;
  }

`;

function App() {
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // Cargar una frase al renderizar por primera vez
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
      <Frase frase={frase} />
    </Contenedor>
  );
}

export default App;
