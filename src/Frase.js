import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    position: relative;
    font-style: italic;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
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
