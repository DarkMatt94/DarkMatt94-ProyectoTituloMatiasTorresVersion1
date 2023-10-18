import React from 'react';
import { Container, Table, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PresentPerfectHowLongForSince() {
  // Agregar ejemplos en diferentes niveles
  
  const basicExamples = [
    <li key="1">
      <strong>How long have you worked</strong> in this company? (
      <strong>¿Cuánto tiempo has trabajado</strong> en esta empresa?).
    </li>,
    <li key="2">
      She <strong>has played</strong> the piano{' '}
      <strong>since she was a child</strong>. (Ella ha tocado el piano{' '}
      <strong>desde que era niña</strong>).
    </li>,
    <li key="3">
      They <strong>have visited</strong> many countries{' '}
      <strong>for the last five years</strong>. (Han visitado muchos países{' '}
      <strong>durante los últimos cinco años</strong>).
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      I <strong>have been studying</strong> English{' '}
      <strong>since I started college</strong>. (He estado estudiando inglés{' '}
      <strong>desde que empecé la universidad</strong>).
    </li>,
    <li key="2">
      <strong>How long have you known</strong> her? (
      <strong>¿Cuánto tiempo hace que la conoces</strong>?).
    </li>,
    <li key="3">
      They <strong>have lived</strong> in different countries{' '}
      <strong>for the last decade</strong>. (Han vivido en diferentes países{' '}
      <strong>durante la última década</strong>).
    </li>,
  ];
  const advancedExamples = [
    <li key="1">
      He <strong>has worked</strong> for various companies{' '}
      <strong>since 2005</strong>. (Ha trabajado para varias empresas{' '}
      <strong>desde 2005</strong>).
    </li>,
    <li key="2">
      <strong>How long have you been learning</strong> to play the guitar? (
      <strong>¿Cuánto tiempo llevas aprendiendo</strong> a tocar la guitarra?).
    </li>,
    <li key="3">
      They <strong>have known each other</strong>{' '}
      <strong>for over 20 years</strong>. (Se han conocido{' '}
      <strong>durante más de 20 años</strong>).
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
        <h2>Present Perfect (How Long, For & Since)</h2>
        <p>
          En inglés, el Present Perfect se utiliza para describir acciones que
          ocurrieron en un pasado no específico y que tienen relevancia en el
          presente. "How long," "for," y "since" se utilizan para hablar sobre
          la duración de una acción.
        </p>

        <h3>Uso de "How Long"</h3>
        <p>
          "How long" se utiliza para preguntar sobre la duración de una acción
          que comenzó en el pasado y continúa en el presente. Se coloca al
          inicio de la pregunta.
        </p>
        <ul>{basicExamples}</ul>

        <h3>Uso de "For"</h3>
        <p>
          "For" se utiliza para indicar la duración de una acción que comenzó en
          el pasado y continúa en el presente. Se coloca después de un período
          de tiempo específico.
        </p>
        <ul>{intermediateExamples}</ul>

        <h3>Uso de "Since"</h3>
        <p>
          "Since" se utiliza para indicar el punto de inicio de una acción que
          continúa en el presente. Se coloca antes del momento de inicio.
        </p>
        <ul>{advancedExamples}</ul>

        <Alert variant="info">
          Practica el uso de "how long," "for," y "since" en el Present Perfect
          para hablar sobre la duración de acciones pasadas con relevancia en el
          presente.
        </Alert>
      </Container>
    </div>
  );
}
