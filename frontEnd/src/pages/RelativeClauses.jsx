import React from 'react';
import { Container, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RelativeClauses() {
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
        <h2>Relative Clauses: Defining & Non-Defining</h2>
        <p>
          Las "Relative Clauses" (Oraciones relativas) son estructuras en inglés
          que se utilizan para dar información adicional sobre un sustantivo.
          Hay dos tipos principales de "Relative Clauses":
        </p>

        <h3>Defining Relative Clauses (Oraciones Relativas Especificativas)</h3>
        <p>
          Estas oraciones aportan información esencial para identificar el
          sustantivo al que se refieren. No se separan con comas y son
          necesarias para comprender completamente la oración principal.
        </p>
        <Alert variant="primary">
          The book <strong>that I bought yesterday</strong> is really
          interesting.
        </Alert>

        <h3>
          Non-Defining Relative Clauses (Oraciones Relativas Explicativas)
        </h3>
        <p>
          Estas oraciones aportan información adicional pero no son esenciales
          para la comprensión de la oración principal. Se separan con comas.
        </p>
        <Alert variant="primary">
          My sister, <strong>who lives in London</strong>, is coming to visit.
        </Alert>

        <h3>Ejemplos</h3>
        <Alert variant="info">
          - Defining Relative Clause: "The car <strong>that I bought</strong> is
          blue."
          <br />- Non-Defining Relative Clause: "My dog,{' '}
          <strong>which is very friendly</strong>, loves to play."
        </Alert>
      </Container>
    </div>
  );
}
