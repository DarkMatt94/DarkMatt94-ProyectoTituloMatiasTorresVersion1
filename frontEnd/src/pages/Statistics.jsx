import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import styles from '../styles/Statistics.module.css'; // Importa los estilos CSS modulares

export default function Users_Admin({ username }) {
  



  return (
    <>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.titleText}>Statistics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLinks}`}>
              <Link to="/main">Home</Link>
              <Link to="/users">Users</Link>
              <Link to="/statistics">Statistics</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
