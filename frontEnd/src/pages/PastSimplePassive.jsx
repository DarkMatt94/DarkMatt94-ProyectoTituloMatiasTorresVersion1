import React from 'react';
import { Container, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PastSimplePassive() {
  // Agregar ejemplos en diferentes niveles
  const basicExamples = [
    <li key="1">
      The letter <strong>was sent</strong> yesterday. (La carta{' '}
      <strong>fue enviada</strong> ayer).
    </li>,
    <li key="2">
      The cake <strong>was eaten</strong> by the kids. (El pastel{' '}
      <strong>fue comido</strong> por los niños).
    </li>,
    <li key="3">
      <strong>Was the book read</strong> by you? (
      <strong>¿Fue leído el libro</strong> por ti?).
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      The old building <strong>was demolished</strong> last week. (El antiguo
      edificio <strong>fue demolido</strong> la semana pasada).
    </li>,
    <li key="2">
      The story <strong>was written</strong> by a famous author. (La historia{' '}
      <strong>fue escrita</strong> por un autor famoso).
    </li>,
    <li key="3">
      <strong>Were the documents signed</strong> by the manager? (
      <strong>¿Fueron firmados los documentos</strong> por el gerente?).
    </li>,
  ];

  const advancedExamples = [
    <li key="1">
      The research project <strong>was conducted</strong> by a team of experts.
      (El proyecto de investigación <strong>fue llevado a cabo</strong> por un
      equipo de expertos).
    </li>,
    <li key="2">
      The film <strong>was directed</strong> by an award-winning director. (La
      película <strong>fue dirigida</strong> por un director galardonado).
    </li>,
    <li key="3">
      <strong>Were the paintings stolen</strong> from the museum? (
      <strong>¿Fueron robados los cuadros</strong> del museo?).
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
        <h2>Pasado Simple Pasivo</h2>
        <p>
          El Pasado Simple Pasivo se utiliza para describir una acción que fue
          realizada por alguien o algo en el pasado. En este tiempo verbal, el
          foco está en la acción en sí, no en quién la realizó. A continuación,
          te presentamos ejemplos en diferentes niveles de dificultad.
        </p>

        <h3>Expresiones en Pasado Simple Pasivo</h3>
        <p>
          Las expresiones en Pasado Simple Pasivo se forman utilizando el verbo
          auxiliar "was" o "were" seguido del verbo en su forma pasiva
          (participio pasado). Aquí tienes ejemplos:
        </p>
        <ul>{basicExamples}</ul>

        <h3>Pasado Simple Pasivo Intermedio</h3>
        <p>
          En un nivel intermedio, puedes encontrar el Pasado Simple Pasivo en
          una variedad de contextos y situaciones. Aquí hay ejemplos
          adicionales:
        </p>
        <ul>{intermediateExamples}</ul>

        <h3>Pasado Simple Pasivo Avanzado</h3>
        <p>
          A un nivel avanzado, el Pasado Simple Pasivo se usa en contextos más
          complejos y variados. Veamos ejemplos en este nivel:
        </p>
        <ul>{advancedExamples}</ul>

        <Alert variant="info">
          Practica la construcción y el uso del Pasado Simple Pasivo para
          mejorar tus habilidades en inglés.
        </Alert>
      </Container>
    </div>
  );
}
