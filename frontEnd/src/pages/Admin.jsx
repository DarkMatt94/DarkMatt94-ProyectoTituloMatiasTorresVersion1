import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styles from '../styles/Admin.module.css'; 

export default function Admin({ username }) {
  Axios.defaults.withCredentials = true; // Configura withCredentials

  const handleLogout = async () => {
    try {
      await Axios.get('http://localhost:3031/logout');
      window.location.replace('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>
            Admin Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLinks}`}>
              {/* Reemplazar href con Link y usa los nombres de clases correctos */}
              <Link to="/main" className={styles.navLink}>
                Home
              </Link>
              <Link to="/users" className={styles.navLink}>
                Users
              </Link>
              <Link to="/statistics" className={styles.navLink}>
                Statistics
              </Link>
            </Nav>
            <Nav>
              <div
                className={`navbar-text ${styles.adminText} ${styles.logoutContainer}`}>
                Admin: {username}
              </div>
              <Nav.Link onClick={handleLogout} className={styles.logoutLink}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <h1 className={styles.welcomeText}>Welcome, {username}</h1>
      </div>
    </>
  );
}
