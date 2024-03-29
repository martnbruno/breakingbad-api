import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 5rem;

  @media (max-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    position: relative;
    font-style: italic;
    font-size: 1.2em;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const Frase = ({ frase }) => {
  return (
    <div>
      <ContenedorFrase>
        <h1>'{frase.quote}'</h1>
        <p>- {frase.author}</p>
      </ContenedorFrase>
    </div>
  );
};

export default Frase;
