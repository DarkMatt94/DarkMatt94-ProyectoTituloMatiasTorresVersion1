import React from 'react';
import { Container, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PresentSimplePassive() {
  // Agregar ejemplos en diferentes niveles
  const basicExamples = [
    <li key="1">
      <strong>The documents are prepared</strong> every morning. (Los documentos{' '}
      <strong>son preparados</strong> cada mañana).
    </li>,
    <li key="2">
      <strong>English lessons are taught</strong> at this school. (Lecciones de
      inglés <strong>son enseñadas</strong> en esta escuela).
    </li>,
    <li key="3">
      <strong>These cookies are baked</strong> by my mom. (Estas galletas{' '}
      <strong>son horneadas</strong> por mi mamá).
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>The news is broadcasted</strong> on television daily. (Las
      noticias <strong>son transmitidas</strong> en la televisión a diario).
    </li>,
    <li key="2">
      <strong>New software updates are released</strong> regularly. (Nuevas
      actualizaciones de software <strong>son lanzadas</strong> regularmente).
    </li>,
    <li key="3">
      <strong>Important decisions are made</strong> by the board of directors.
      (Decisiones importantes <strong>son tomadas</strong> por la junta
      directiva).
    </li>,
  ];

  const advancedExamples = [
    <li key="1">
      <strong>The house has been painted</strong> by professionals. (La casa{' '}
      <strong>ha sido pintada</strong> por profesionales).
    </li>,
    <li key="2">
      <strong>New policies are being implemented</strong> by the government.
      (Nuevas políticas <strong>están siendo implementadas</strong> por el
      gobierno).
    </li>,
    <li key="3">
      <strong>Advanced technology is used</strong> in this research project.
      (Tecnología avanzada <strong>es utilizada</strong> en este proyecto de
      investigación).
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
        <h2>Presente Simple Pasivo</h2>
        <p>
          El <strong>Presente Simple Pasivo</strong> se utiliza para hablar de
          acciones que son realizadas por alguien o algo, sin enfocarse en quién
          o qué realiza la acción. Aquí tienes ejemplos en diferentes niveles de
          dificultad:
        </p>

        <h3>Nivel Básico</h3>
        <p>
          En nivel básico, se utilizan oraciones en Presente Simple Pasivo con
          ejemplos comunes.
        </p>
        <ul>{basicExamples}</ul>

        <h3>Nivel Medio</h3>
        <p>
          En nivel medio, se emplean oraciones más variadas en Presente Simple
          Pasivo.
        </p>
        <ul>{intermediateExamples}</ul>

        <h3>Nivel Avanzado</h3>
        <p>
          En nivel avanzado, se exploran casos más complejos de Presente Simple
          Pasivo.
        </p>
        <ul>{advancedExamples}</ul>

        <Alert variant="info">
          Practica la construcción de oraciones en Presente Simple Pasivo para
          describir acciones que son realizadas por terceros en diferentes
          contextos.
        </Alert>
      </Container>
    </div>
  );
}
