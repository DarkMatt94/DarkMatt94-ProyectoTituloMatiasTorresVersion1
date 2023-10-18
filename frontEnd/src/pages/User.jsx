import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import styles from '../styles/User.module.css'; // Importa los estilos CSS modulares

export default function User({ username }) {
  const handleLogout = async () => {
    try {
      await Axios.get('http://localhost:3031/logout');
      // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className={styles.userContainer}>
      <Navbar bg="light" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.brand}>
            English Learning Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLinks}`}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
            <Nav className={styles.userNav}>
              <Navbar.Text className={`me-3 ${styles.welcomeText}`}>
                Welcome, {username}!
              </Navbar.Text>
              <Link
                to="/login"
                onClick={handleLogout}
                className={styles.logoutLink}>
                <Button variant="outline-danger">Logout</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className={`mt-4 ${styles.contentContainer}`}>
        <h1 className={styles.heading}>
          Start Your English Journey, {username}!
        </h1>
        <p className={styles.paragraph}>
          Explore our English learning materials and practice exercises to
          improve your language skills.
        </p>
        <Link to="/materials" className={styles.link}>
          <Button variant="primary" className={`me-3 ${styles.button}`}>
            View Materials
          </Button>
        </Link>
        <Link to="/exercises" className={styles.link}>
          <Button variant="success" className={styles.button}>
            Do Exercises
          </Button>
        </Link>
      </Container>
    </div>
  );
}
