import React from 'react';
import { Container, Table, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EverNever() {
  // Agregar verbos regulares e irregulares del Present Perfect
  const regularVerbs = [
    { infinitive: 'work', pastParticiple: 'worked' },
    { infinitive: 'play', pastParticiple: 'played' },
    { infinitive: 'visit', pastParticiple: 'visited' },
    // Agregar más verbos regulares aquí
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastParticiple: 'gone' },
    { infinitive: 'eat', pastParticiple: 'eaten' },
    { infinitive: 'buy', pastParticiple: 'bought' },
    // Agregar más verbos irregulares aquí
  ];

  // Agregar ejemplos en diferentes niveles
  const basicExamples = [
    <li key="1">
      <strong>Have you ever visited</strong> Berlin? (
      <strong>¿Alguna vez has visitado</strong> Berlín?)
    </li>,
    <li key="2">
      <strong>Haven't they ever been</strong> to Europe? (¿No han estado nunca
      en Europa?)
    </li>,
    <li key="3">
      <strong>Nothing like this has ever happened</strong> to us. (Nada como
      esto nos ha sucedido nunca).
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      It's the first time that <strong>I've ever eaten</strong> snails. (Es la
      primera vez que <strong>como</strong> caracoles).
    </li>,
    <li key="2">
      <strong>This is the first time I've ever been</strong> to England. (Esta
      es la primera vez que <strong>he estado</strong> en Inglaterra).
    </li>,
  ];

  const advancedExamples = [
    <li key="1">
      <strong>I have never been</strong> to Italy. (Nunca{' '}
      <strong>he estado</strong> en Italia).
    </li>,
    <li key="2">
      <strong>They have traveled</strong> to many countries{' '}
      <strong>ever since</strong>. (Han viajado a muchos países{' '}
      <strong>desde entonces</strong>).
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
        <h2>Present Perfect + Ever, Never.</h2>
        <p>
          Los adverbios "ever" y "never" se refieren a un tiempo no
          identificado, anterior al presente. "Ever" se utiliza en preguntas,
          preguntas negativas y oraciones negativas con "nothing+ever" o
          "nobody+ever." "Never" significa "nunca antes de ahora" y se coloca
          antes del verbo principal (en "past participle").
        </p>

        <h3>Verbos Regulares en el Present Perfect</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Participio Pasado</th>
            </tr>
          </thead>
          <tbody>
            {regularVerbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.infinitive}</td>
                <td>{verb.pastParticiple}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Verbos Irregulares en el Present Perfect</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Participio Pasado</th>
            </tr>
          </thead>
          <tbody>
            {irregularVerbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.infinitive}</td>
                <td>{verb.pastParticiple}</td>
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
          Practica el uso de "ever" y "never" en el Present Perfect para
          expresar experiencias y situaciones en tu vida.
        </Alert>
      </Container>
    </div>
  );
}
