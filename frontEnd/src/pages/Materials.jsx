import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Container, Navbar, Nav, Card, ListGroup } from 'react-bootstrap';
import styles from '../styles/Materials.module.css'; 

export default function Materials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const unidadesResponse = await Axios.get(
          'http://localhost:3031/unidades_ingles'
        );
        const materiasResponse = await Axios.get(
          'http://localhost:3031/materias_ingles'
        );

        const combinedData = unidadesResponse.data.unidades.map((unidad) => {
          return {
            unidad: unidad,
            materias: materiasResponse.data.materias.filter(
              (materia) => materia.unidad_id === unidad.id
            ),
          };
        });

        setData(combinedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.userContainer}>
      <Navbar bg="light" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navBrand}>
            English Learning Materials
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLink}`}>
              <Link to="/main" className={styles.link}>
                Home
              </Link>
              {/*  agregar más elementos de menú aquí */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className={`mt-4 ${styles.container}`}>
        {' '}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data.map((item) => (
              <div key={item.unidad.id} className={`mb-4 ${styles.card}`}>
                <Card>
                  <Card.Header as="h2">{item.unidad.nombre}</Card.Header>
                  <Card.Body>
                    <Card.Text>{item.unidad.descripcion}</Card.Text>
                    <h3>Subjects:</h3>
                    <ListGroup>
                      {item.materias.map((materia) => (
                        <ListGroup.Item
                          key={materia.id}
                          className={styles.listItem}>
                          <h4>{materia.nombre}</h4>
                          <p>{materia.descripcion}</p>
                          <Link
                            to={`/materials/${materia.id}`}
                            className={styles.detailsButton}>
                            Ver detalles
                          </Link>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
