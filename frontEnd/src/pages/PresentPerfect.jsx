import React from 'react';
import { Container, Table, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PresentPerfect() {
  // Agregar verbos regulares e irregulares del Present Perfect
  const regularVerbs = [
    { infinitive: 'work', pastParticiple: 'worked' },
    { infinitive: 'play', pastParticiple: 'played' },
    { infinitive: 'visit', pastParticiple: 'visited' },
    { infinitive: 'help', pastParticiple: 'helped' },
    { infinitive: 'live', pastParticiple: 'lived' },
    // Agregar más verbos regulares aquí
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastParticiple: 'gone' },
    { infinitive: 'eat', pastParticiple: 'eaten' },
    { infinitive: 'buy', pastParticiple: 'bought' },
    { infinitive: 'have', pastParticiple: 'had' },
    { infinitive: 'do', pastParticiple: 'done' },
    // Agregar más verbos irregulares aquí
  ];

  // Agregar ejemplos en diferentes niveles
  const basicExamples = [
    <li key="1">
      <strong>I have worked</strong> for five years. (He trabajado durante cinco
      años)
    </li>,
    <li key="2">
      <strong>She has visited</strong> London. (Ella ha visitado Londres)
    </li>,
    // Otros ejemplos aquí
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>He has never eaten</strong> sushi. (Él nunca ha comido sushi)
    </li>,
    <li key="2">
      <strong>They have traveled</strong> to many countries. (Ellos han viajado
      a muchos países)
    </li>,
    // Otros ejemplos aquí
  ];

  const advancedExamples = [
    <li key="1">
      <strong>By the time we arrived, they had already finished</strong> the
      project. (Para cuando llegamos, ellos ya habían terminado el proyecto)
    </li>,
    <li key="2">
      <strong>She had never seen</strong> such a beautiful sunset before. (Ella
      nunca había visto una puesta de sol tan hermosa)
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
        <h2>Present Perfect</h2>
        <p>
          El <strong>Present Perfect</strong> es un tiempo verbal en inglés que
          se utiliza para expresar acciones que tienen relevancia en el
          presente, pero que ocurrieron en un tiempo no especificado en el
          pasado. A continuación, te explicamos su uso, estructura y ejemplos en
          diferentes niveles de dificultad.
        </p>

        <h3>Forma Positiva</h3>
        <p>
          En la forma positiva, se utiliza el verbo auxiliar "have" (para
          pronombres I, You, We, They) o "has" (para pronombre He, She, It)
          seguido del participio pasado del verbo principal. Por ejemplo:
        </p>
        <ul>
          <li>I have worked (He trabajado)</li>
          <li>She has visited (Ella ha visitado)</li>
          <li>They have played (Ellos han jugado)</li>
        </ul>

        <h3>Forma Negativa</h3>
        <p>
          En la forma negativa, se añade "not" después de "have" o "has." Por
          ejemplo:
        </p>
        <ul>
          <li>I have not worked (No he trabajado)</li>
          <li>She has not visited (Ella no ha visitado)</li>
          <li>They have not played (Ellos no han jugado)</li>
        </ul>

        <h3>Forma Interrogativa</h3>
        <p>
          En la forma interrogativa, se invierte el orden de "have" o "has" y el
          sujeto. Por ejemplo:
        </p>
        <ul>
          <li>Have I worked? (¿He trabajado?)</li>
          <li>Has she visited? (¿Ella ha visitado?)</li>
          <li>Have they played? (¿Ellos han jugado?)</li>
        </ul>

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
          Practica el Present Perfect en diversas situaciones para fortalecer tu
          comprensión y habilidades en inglés.
        </Alert>
      </Container>
    </div>
  );
}
