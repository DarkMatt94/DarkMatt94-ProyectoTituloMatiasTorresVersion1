import React from 'react';
import { Container, Table, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PastSimple() {
  const regularVerbs = [
    { infinitive: 'work', pastSimple: 'worked' },
    { infinitive: 'play', pastSimple: 'played' },
    { infinitive: 'visit', pastSimple: 'visited' },
    { infinitive: 'help', pastSimple: 'helped' },
    { infinitive: 'live', pastSimple: 'lived' },
    { infinitive: 'clean', pastSimple: 'cleaned' },
    { infinitive: 'jump', pastSimple: 'jumped' },
    { infinitive: 'talk', pastSimple: 'talked' },
    { infinitive: 'watch', pastSimple: 'watched' },
    { infinitive: 'call', pastSimple: 'called' },
    { infinitive: 'play', pastSimple: 'played' },
    { infinitive: 'learn', pastSimple: 'learned' },
    { infinitive: 'open', pastSimple: 'opened' },
    { infinitive: 'close', pastSimple: 'closed' },
    { infinitive: 'move', pastSimple: 'moved' },
    { infinitive: 'listen', pastSimple: 'listened' },
    { infinitive: 'cook', pastSimple: 'cooked' },
    { infinitive: 'smile', pastSimple: 'smiled' },
    { infinitive: 'like', pastSimple: 'liked' },
    { infinitive: 'visit', pastSimple: 'visited' },
    { infinitive: 'watch', pastSimple: 'watched' },
    { infinitive: 'play', pastSimple: 'played' },
    { infinitive: 'learn', pastSimple: 'learned' },
    { infinitive: 'open', pastSimple: 'opened' },
    { infinitive: 'close', pastSimple: 'closed' },
    { infinitive: 'move', pastSimple: 'moved' },
    { infinitive: 'listen', pastSimple: 'listened' },
    { infinitive: 'cook', pastSimple: 'cooked' },
    { infinitive: 'smile', pastSimple: 'smiled' },
    { infinitive: 'like', pastSimple: 'liked' },
    { infinitive: 'visit', pastSimple: 'visited' },
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastSimple: 'went' },
    { infinitive: 'eat', pastSimple: 'ate' },
    { infinitive: 'buy', pastSimple: 'bought' },
    { infinitive: 'have', pastSimple: 'had' },
    { infinitive: 'do', pastSimple: 'did' },
    { infinitive: 'be', pastSimple: 'was/were' },
    { infinitive: 'begin', pastSimple: 'began' },
    { infinitive: 'break', pastSimple: 'broke' },
    { infinitive: 'choose', pastSimple: 'chose' },
    { infinitive: 'come', pastSimple: 'came' },
    { infinitive: 'drive', pastSimple: 'drove' },
    { infinitive: 'find', pastSimple: 'found' },
    { infinitive: 'give', pastSimple: 'gave' },
    { infinitive: 'have', pastSimple: 'had' },
    { infinitive: 'know', pastSimple: 'knew' },
    { infinitive: 'leave', pastSimple: 'left' },
    { infinitive: 'make', pastSimple: 'made' },
    { infinitive: 'put', pastSimple: 'put' },
    { infinitive: 'say', pastSimple: 'said' },
    { infinitive: 'take', pastSimple: 'took' },
    { infinitive: 'begin', pastSimple: 'began' },
    { infinitive: 'break', pastSimple: 'broke' },
    { infinitive: 'choose', pastSimple: 'chose' },
    { infinitive: 'come', pastSimple: 'came' },
    { infinitive: 'drive', pastSimple: 'drove' },
    { infinitive: 'find', pastSimple: 'found' },
    { infinitive: 'give', pastSimple: 'gave' },
    { infinitive: 'know', pastSimple: 'knew' },
    { infinitive: 'leave', pastSimple: 'left' },
    { infinitive: 'make', pastSimple: 'made' },
    { infinitive: 'put', pastSimple: 'put' },
    { infinitive: 'say', pastSimple: 'said' },
    { infinitive: 'take', pastSimple: 'took' },
  ];

  const basicExamples = [
    <li key="1">
      <strong>I watched</strong> a movie yesterday. (<strong>Vi</strong> una
      película ayer)
    </li>,
    <li key="2">
      <strong>She cooked</strong> dinner last night. (Ella{' '}
      <strong>cocinó</strong> la cena anoche)
    </li>,
    <li key="3">
      We <strong>played</strong> soccer in the park. (Jugamos fútbol en el
      parque)
    </li>,
    <li key="4">
      He <strong>worked</strong> late at the office. (Él trabajó tarde en la
      oficina)
    </li>,
    <li key="5">
      They <strong>visited</strong> their grandparents. (Ellos visitaron a sus
      abuelos)
    </li>,
    // Agregar más ejemplos aquí
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>He read</strong> an interesting book last week. (Él{' '}
      <strong>leyó</strong> un libro interesante la semana pasada)
    </li>,
    <li key="2">
      <strong>They went</strong> to the beach on Sunday. (Ellos{' '}
      <strong>fueron</strong> a la playa el domingo)
    </li>,
    <li key="3">
      She <strong>found</strong> a hidden treasure. (Ella{' '}
      <strong>encontró</strong> un tesoro oculto)
    </li>,
    <li key="4">
      We <strong>drove</strong> to the mountains. (Nosotros{' '}
      <strong>conducimos</strong> a las montañas)
    </li>,
    <li key="5">
      I <strong>chose</strong> the blue shirt. (Elegí la camisa azul)
    </li>,
    // Agregar más ejemplos aquí
  ];

  const advancedExamples = [
    <li key="1">
      <strong>She had never visited</strong> that museum before. (Ella nunca{' '}
      <strong>había visitado</strong> ese museo antes)
    </li>,
    <li key="2">
      <strong>We had already finished</strong> the project by the time they
      arrived. (Ya <strong>habíamos terminado</strong> el proyecto cuando
      llegaron)
    </li>,
    <li key="3">
      He <strong>was</strong> very tired after the long journey. (Él{' '}
      <strong>estaba</strong> muy cansado después del largo viaje)
    </li>,
    <li key="4">
      They <strong>began</strong> a new chapter in their lives. (Ellos{' '}
      <strong>empezaron</strong> un nuevo capítulo en sus vidas)
    </li>,
    <li key="5">
      She <strong>made</strong> a significant contribution to the project. (Ella
      <strong>realizó</strong> una contribución significativa al proyecto)
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
              <Link to="/main" >
                Home
              </Link>
              <Link to="/materials">
                Materials
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h2>Past Simple</h2>
        <p>
          El <strong>Past Simple</strong> es un tiempo verbal en inglés que se
          utiliza principalmente para expresar acciones que ocurrieron en el
          pasado y ya han sido completadas. A continuación, te explicamos su
          uso, estructura y ejemplos en diferentes niveles de dificultad.
        </p>

        <h3>Forma Positiva</h3>
        <p>
          En la forma positiva, se utiliza el verbo en su forma pasada. Para la
          mayoría de los verbos, esto implica agregar "-ed" al final del verbo.
          Por ejemplo:
        </p>
        <ul>
          <li>
            I <strong>worked</strong> (Trabajé)
          </li>
          <li>
            She <strong>visited</strong> (Ella visitó)
          </li>
          <li>
            They <strong>played</strong> (Jugaron)
          </li>
        </ul>

        <h3>Forma Negativa</h3>
        <p>
          En la forma negativa, se utiliza el verbo auxiliar "did not" (didn't)
          seguido del verbo en su forma base. Por ejemplo:
        </p>
        <ul>
          <li>
            I <strong>didn't work</strong> (No trabajé)
          </li>
          <li>
            She <strong>didn't visit</strong> (Ella no visitó)
          </li>
          <li>
            They <strong>didn't play</strong> (No jugaron)
          </li>
        </ul>

        <h3>Forma Interrogativa</h3>
        <p>
          En la forma interrogativa, se utiliza el verbo auxiliar "did" seguido
          del sujeto y el verbo en su forma base. Por ejemplo:
        </p>
        <ul>
          <li>
            <strong>Did I work?</strong> (¿Trabajé?)
          </li>
          <li>
            <strong>Did she visit?</strong> (¿Ella visitó?)
          </li>
          <li>
            <strong>Did they play?</strong> (¿Jugaron?)
          </li>
        </ul>

        <h3>Verbos Regulares en el Past Simple</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Pasado Simple</th>
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

        <h3>Verbos Irregulares en el Past Simple</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Verbo Infinitivo</th>
              <th>Pasado Simple</th>
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
          Practica utilizando el Past Simple en diferentes situaciones para
          mejorar tu comprensión y fluidez en inglés.
        </Alert>
      </Container>
    </div>
  );
}
