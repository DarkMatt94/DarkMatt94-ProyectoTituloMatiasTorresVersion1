import React from 'react';
import { Container, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PredictionsAndPromises() {
  // Agregar ejemplos en diferentes niveles
  const basicExamples = [
    <li key="1">
      <strong>I think it will rain</strong> later. (
      <strong>Creo que lloverá</strong> más tarde).
    </li>,
    <li key="2">
      <strong>She'll probably arrive</strong> in the evening. (
      <strong>Probablemente llegará</strong> por la tarde).
    </li>,
    <li key="3">
      <strong>Don't worry, I promise I'll call</strong> you. (
      <strong>No te preocupes, prometo que te llamaré</strong>).
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>
        Based on the weather forecast, it's likely that it'll be sunny
      </strong>
      . (
      <strong>Según el pronóstico del tiempo, es probable que haga sol</strong>
      ).
    </li>,
    <li key="2">
      <strong>By this time next year, they will have finished</strong> the
      construction. (
      <strong>Para esta misma época el próximo año, habrán terminado</strong> la
      construcción).
    </li>,
    <li key="3">
      <strong>I assure you, I won't let you down</strong>. (
      <strong>Te aseguro que no te decepcionaré</strong>).
    </li>,
  ];

  const advancedExamples = [
    <li key="1">
      <strong>It's almost certain that the team will win</strong> the
      championship. (<strong>Es casi seguro que el equipo ganará</strong> el
      campeonato).
    </li>,
    <li key="2">
      <strong>Once I give my word, I will undoubtedly keep it</strong>. (
      <strong>Una vez que doy mi palabra, sin duda la cumpliré</strong>).
    </li>,
    <li key="3">
      <strong>By the end of the year, they will have accomplished</strong> all
      their goals. (<strong>Para fin de año, habrán logrado</strong> todos sus
      objetivos).
    </li>,
  ];

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>English Learning Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/main">Home</Link>
              <Link to="/materials">Materials</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h2>Expresión de Predicciones y Promesas</h2>
        <p>
          En inglés, es importante saber cómo expresar predicciones y promesas.
          Las predicciones se refieren a lo que creemos que ocurrirá en el
          futuro, mientras que las promesas son compromisos de cumplir con una
          acción o declaración. Aquí tienes algunos ejemplos:
        </p>

        <h3>Expresión de Predicciones</h3>
        <p>
          Las predicciones se pueden expresar mediante frases y palabras como "I
          think" (creo), "probably" (probablemente), "likely" (probable), entre
          otras. Estas indican lo que creemos que sucederá en el futuro.
        </p>
        <ul>{basicExamples}</ul>

        <h3>Expresión de Promesas</h3>
        <p>
          Las promesas son compromisos que hacemos para realizar una acción o
          cumplir con algo. Frases como "I promise" (prometo), "I assure you"
          (te aseguro), y "I won't let you down" (no te decepcionaré) se
          utilizan para expresar promesas.
        </p>
        <ul>{intermediateExamples}</ul>

        <h3>Expresión de Alta Certidumbre</h3>
        <p>
          Cuando estamos seguros de una predicción o promesa, podemos utilizar
          expresiones como "it's almost certain" (es casi seguro), "undoubtedly"
          (sin duda), y "once I give my word" (una vez que doy mi palabra) para
          expresar alta certidumbre.
        </p>
        <ul>{advancedExamples}</ul>

        <Alert variant="info">
          Practica el uso de estas expresiones para comunicar predicciones y
          promesas de manera efectiva en inglés.
        </Alert>
      </Container>
    </div>
  );
}
