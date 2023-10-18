import React from 'react';
import { Container, Alert, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NecessityProbability() {
  // Agregar ejemplos en diferentes niveles
  const basicExamples = [
    <li key="1">
      <strong>You must wear</strong> a seatbelt in the car. (
      <strong>Debes llevar</strong> puesto el cinturón de seguridad en el auto).
    </li>,
    <li key="2">
      <strong>It can get</strong> very cold in the winter. (
      <strong>Puede ponerse</strong> muy frío en el invierno).
    </li>,
    <li key="3">
      <strong>We have to be</strong> at the airport by 7 AM. (
      <strong>Tenemos que estar</strong> en el aeropuerto a las 7 de la mañana).
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>They might have left</strong> already. (
      <strong>Podrían haberse ido</strong> ya).
    </li>,
    <li key="2">
      <strong>You should call</strong> the doctor if you don't feel well. (
      <strong>Deberías llamar</strong> al médico si no te sientes bien).
    </li>,
    <li key="3">
      <strong>It's likely that they will come</strong> to the party. (
      <strong>Es probable que vengan</strong> a la fiesta).
    </li>,
  ];

  const advancedExamples = [
    <li key="1">
      <strong>There's a possibility that the meeting has been canceled</strong>.
      (
      <strong>
        Existe la posibilidad de que la reunión haya sido cancelada
      </strong>
      ).
    </li>,
    <li key="2">
      <strong>It's essential that you arrive on time</strong>. (
      <strong>Es esencial que llegues a tiempo</strong>).
    </li>,
    <li key="3">
      <strong>They couldn't have finished the project without your help</strong>
      . (<strong>No podrían haber terminado el proyecto sin tu ayuda</strong>).
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
        <h2>Expresión de Necesidad y Probabilidad</h2>
        <p>
          En inglés, existen varias formas de expresar la necesidad y la
          probabilidad. Estos verbos modales y expresiones ayudan a transmitir
          cuán cierta o necesaria es una acción. Veamos algunos ejemplos.
        </p>

        <h3>Expresión de la Necesidad</h3>
        <p>
          La necesidad se puede expresar mediante verbos modales como "must"
          (deber), "have to" (tener que) y "should" (debería). Estos verbos
          indican que algo es necesario o requerido.
        </p>
        <ul>{basicExamples}</ul>

        <h3>Expresión de la Probabilidad</h3>
        <p>
          La probabilidad se puede expresar mediante verbos modales como "can"
          (puede), "might" (podría), "may" (puede), y expresiones como "es
          probable que" (it's likely), "existe la posibilidad" (there's a
          possibility), etc. Estas indican la probabilidad o posibilidad de que
          algo ocurra.
        </p>
        <ul>{intermediateExamples}</ul>

        <h3>Expresión de Alta Probabilidad</h3>
        <p>
          Para expresar alta probabilidad, se pueden utilizar verbos modales
          como "must" (debe), "can't" (no puede), "couldn't" (no podría), y
          expresiones como "es seguro" (it's certain), "es inevitable" (it's
          inevitable), etc.
        </p>
        <ul>{advancedExamples}</ul>

        <Alert variant="info">
          Practica el uso de estas expresiones para comunicar efectivamente la
          necesidad y la probabilidad en inglés.
        </Alert>
      </Container>
    </div>
  );
}
