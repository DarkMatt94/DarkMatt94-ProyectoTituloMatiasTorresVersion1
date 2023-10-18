import React from 'react';
import { Container, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function QuestionTags() {
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
        <h2>Question Tags</h2>
        <p>
          Las "Question Tags" (etiquetas interrogativas) son una estructura que
          se utiliza para hacer preguntas cortas o confirmaciones al final de
          una afirmación. Suelen emplearse para comprobar la información o
          buscar la aprobación del oyente.
        </p>

        <h3>Formación de Question Tags</h3>
        <p>Para formar una "Question Tag," generalmente sigues estas reglas:</p>
        <Alert variant="info">
          - Si la afirmación es positiva, la "Question Tag" será negativa.
          <br />
          - Si la afirmación es negativa, la "Question Tag" será positiva.
          <br />
          - Utiliza el mismo verbo principal de la afirmación en la "Question
          Tag."
          <br />- Agrega el pronombre correcto en la "Question Tag."
        </Alert>

        <h3>Ejemplos</h3>
        <Alert variant="primary">
          - You are a student, <strong>aren't you</strong>?
          <br />- He doesn't like coffee, <strong>does he</strong>?
          <br />- We have met before, <strong>haven't we</strong>?
        </Alert>
      </Container>
    </div>
  );
}
