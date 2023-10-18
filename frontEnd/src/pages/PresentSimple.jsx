import React from 'react';
import { Container, Table, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PresentSimple() {
  const regularVerbs = [
    { infinitive: 'work', presentSimple: 'works' },
    { infinitive: 'play', presentSimple: 'plays' },
    { infinitive: 'visit', presentSimple: 'visits' },
    { infinitive: 'help', presentSimple: 'helps' },
    { infinitive: 'live', presentSimple: 'lives' },
    // Agregar más verbos regulares aquí
  ];

  const irregularVerbs = [
    { infinitive: 'go', presentSimple: 'goes' },
    { infinitive: 'eat', presentSimple: 'eats' },
    { infinitive: 'buy', presentSimple: 'buys' },
    { infinitive: 'have', presentSimple: 'has' },
    { infinitive: 'do', presentSimple: 'does' },
    // Agregar más verbos irregulares aquí
  ];

  const basicExamples = [
    <li key="1">
      He <strong>works</strong> at a software company. (Él{' '}
      <strong>trabaja</strong> en una empresa de software).
    </li>,
    <li key="2">
      She <strong>plays</strong> the piano. (Ella <strong>toca</strong> el
      piano).
    </li>,
    <li key="3">
      They <strong>visit</strong> their grandparents every weekend. (Ellos{' '}
      <strong>visitan</strong> a sus abuelos cada fin de semana).
    </li>,
    <li key="4">
      The teacher <strong>helps</strong> the students with their homework. (El
      profesor <strong>ayuda</strong> a los estudiantes con su tarea).
    </li>,
    <li key="5">
      My cat <strong>likes</strong> to play with a ball of yarn. (A mi gato{' '}
      <strong>le gusta</strong> jugar con una bola de estambre).
    </li>,
    // Agregar más ejemplos aquí
  ];

  const intermediateExamples = [
    <li key="1">
      I <strong>do</strong> my best in every project. (Hago lo mejor en cada
      proyecto).
    </li>,
    <li key="2">
      The company <strong>sells</strong> high-quality products. (La empresa{' '}
      <strong>vende</strong> productos de alta calidad).
    </li>,
    <li key="3">
      She always <strong>goes</strong> to the gym. (Ella siempre{' '}
      <strong>va</strong> al gimnasio).
    </li>,
    <li key="4">
      We <strong>study</strong> for our exams. (Estudiamos para nuestros
      exámenes).
    </li>,
    <li key="5">
      The sun <strong>rises</strong> in the east. (El sol <strong>sale</strong>{' '}
      por el este).
    </li>,
    // Agregar más ejemplos aquí
  ];

  const advancedExamples = [
    <li key="1">
      The scientists <strong>conduct</strong> experiments to gather data. (Los
      científicos <strong>realizan</strong> experimentos para recopilar datos).
    </li>,
    <li key="2">
      The artist <strong>creates</strong> beautiful paintings. (El artista{' '}
      <strong>crea</strong> hermosas pinturas).
    </li>,
    <li key="3">
      The manager <strong>delegates</strong> tasks to the team. (El gerente{' '}
      <strong>delega</strong> tareas al equipo).
    </li>,
    <li key="4">
      The chef <strong>prepares</strong> exquisite dishes. (El chef{' '}
      <strong>prepara</strong> platillos exquisitos).
    </li>,
    <li key="5">
      The company <strong>invests</strong> in innovative technologies. (La
      empresa <strong>invierte</strong> en tecnologías innovadoras).
    </li>,
    // Agregar más ejemplos aquí
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
        <h2>Present Simple</h2>
        <p>
          El <strong>Present Simple</strong> es un tiempo verbal en inglés que
          se utiliza para describir acciones regulares o verdades generales. A
          continuación, te explicamos su uso, estructura y ejemplos en
          diferentes niveles de dificultad.
        </p>

        <h3>Forma Positiva</h3>
        <p>
          En la forma positiva, se utiliza el verbo en su forma base. Por
          ejemplo:
        </p>
        <ul>
          <li>
            He <strong>works</strong> at a software company. (Él{' '}
            <strong>trabaja</strong> en una empresa de software).
          </li>
          <li>
            She <strong>plays</strong> the piano. (Ella <strong>toca</strong> el
            piano).
          </li>
          <li>
            They <strong>visit</strong> their grandparents every weekend. (Ellos{' '}
            <strong>visitan</strong> a sus abuelos cada fin de semana).
          </li>
        </ul>

        <h3>Forma Negativa</h3>
        <p>
          En la forma negativa, se utiliza el verbo auxiliar "do not" (don't) o
          "does not" (doesn't) seguido del verbo en su forma base. Por ejemplo:
        </p>
        <ul>
          <li>
            I <strong>don't work</strong> on weekends. (No trabajo los fines de
            semana).
          </li>
          <li>
            She <strong>doesn't play</strong> soccer. (Ella no juega al fútbol).
          </li>
          <li>
            They <strong>don't visit</strong> the city often. (Ellos no visitan
            la ciudad a menudo).
          </li>
        </ul>

        <h3>Forma Interrogativa</h3>
        <p>
          En la forma interrogativa, se utiliza el verbo auxiliar "do" o "does"
          seguido del sujeto y el verbo en su forma base. Por ejemplo:
        </p>
        <ul>
          <li>
            <strong>Do I work?</strong> (¿Trabajo?)
          </li>
          <li>
            <strong>Does she play?</strong> (¿Ella juega?)
          </li>
          <li>
            <strong>Do they visit?</strong> (¿Ellos visitan?)
          </li>
        </ul>

        <h3>Verbos Regulares en el Present Simple</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Present Simple</th>
            </tr>
          </thead>
          <tbody>
            {regularVerbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.infinitive}</td>
                <td>{verb.presentSimple}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Verbos Irregulares en el Present Simple</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Present Simple</th>
            </tr>
          </thead>
          <tbody>
            {irregularVerbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.infinitive}</td>
                <td>{verb.presentSimple}</td>
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
          Practica el uso del Present Simple en diferentes situaciones para
          mejorar tu comprensión y fluidez en inglés.
        </Alert>
      </Container>
    </div>
  );
}
