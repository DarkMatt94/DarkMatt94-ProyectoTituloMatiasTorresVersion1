import React from 'react';
import { Container, Table, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PastCont() {
  const regularVerbs = [
    { infinitive: 'work', pastSimple: 'was/were working' },
    { infinitive: 'play', pastSimple: 'was/were playing' },
    { infinitive: 'visit', pastSimple: 'was/were visiting' },
    // Agregar más verbos regulares aquí
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastSimple: 'was/were going' },
    { infinitive: 'eat', pastSimple: 'was/were eating' },
    { infinitive: 'buy', pastSimple: 'was/were buying' },
    // Agregar más verbos irregulares aquí
  ];

  const basicExamples = [
    <li key="1">
      <strong>I was working</strong> at the office yesterday. (Yo{' '}
      <strong>estaba trabajando</strong> en la oficina ayer).
    </li>,
    <li key="2">
      <strong>She was playing</strong> with her friends last evening. (Ella{' '}
      <strong>estaba jugando</strong> con sus amigos anoche).
    </li>,
    // Otros ejemplos aquí
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>They were studying</strong> when I called. (Ellos{' '}
      <strong>estaban estudiando</strong> cuando llamé).
    </li>,
    <li key="2">
      <strong>He was watching</strong> TV while it rained. (Él{' '}
      <strong>estaba viendo</strong> la televisión mientras llovía).
    </li>,
    // Otros ejemplos aquí
  ];

  const advancedExamples = [
    <li key="1">
      <strong>She was taking a nap</strong> in the afternoon. (Ella{' '}
      <strong>estaba tomando una siesta</strong> por la tarde).
    </li>,
    <li key="2">
      <strong>We were discussing</strong> the project's details. (Nosotros{' '}
      <strong>estábamos discutiendo</strong> los detalles del proyecto).
    </li>,
    // Otros ejemplos aquí
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
        <h2>Past Continuous</h2>
        <p>
          El <strong>Past Continuous</strong> es un tiempo verbal en inglés que
          se utiliza para expresar acciones que estaban ocurriendo en un momento
          específico en el pasado. A continuación, te explicamos su uso,
          estructura y ejemplos en diferentes niveles de dificultad.
        </p>

        <h3>Forma Positiva</h3>
        <p>
          En la forma positiva, se utiliza el verbo "to be" en el pasado simple
          (was/were) seguido del verbo en su forma continua (con el sufijo
          -ing). Por ejemplo:
        </p>
        <ul>
          <li>I was working (Yo estaba trabajando)</li>
          <li>She was playing (Ella estaba jugando)</li>
        </ul>

        <h3>Forma Negativa</h3>
        <p>
          En la forma negativa, se añade "not" después de "was" o "were" para
          formar "was not" o "were not." Por ejemplo:
        </p>
        <ul>
          <li>I wasn't working (Yo no estaba trabajando)</li>
          <li>She wasn't playing (Ella no estaba jugando)</li>
        </ul>

        <h3>Forma Interrogativa</h3>
        <p>
          En la forma interrogativa, se invierte el orden de "was" o "were" y el
          sujeto. Por ejemplo:
        </p>
        <ul>
          <li>Was I working? (¿Estaba yo trabajando?)</li>
          <li>Was she playing? (¿Estaba ella jugando?)</li>
        </ul>

        <h3>Verbos Regulares en el Past Continuous</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Past Continuous</th>
            </tr>
          </thead>
          <tbody>
            {regularVerbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.infinitive}</td>
                <td>{verb.pastSimple}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Verbos Irregulares en el Past Continuous</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Past Continuous</th>
            </tr>
          </thead>
          <tbody>
            {irregularVerbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.infinitive}</td>
                <td>{verb.pastSimple}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Ejemplos en Diferentes Niveles</h3>

        <h4>Nivel Básico</h4>
        <ul>{basicExamples}</ul>

        <h4>Nivel Medio</h4>
        <ul>{intermediateExamples}</ul>

        <h4>Nivel Avanzado</h4>
        <ul>{advancedExamples}</ul>

        <Alert variant="info">
          Practica utilizando el Past Continuous en diferentes situaciones para
          mejorar tu comprensión y fluidez en inglés.
        </Alert>
      </Container>
    </div>
  );
}
