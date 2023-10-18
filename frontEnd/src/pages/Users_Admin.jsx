import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../styles/Users_Admin.module.css'; // Importa los estilos CSS modulares

export default function Users_Admin({ username }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener la lista de usuarios
    Axios.get('http://localhost:3031/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.titleText}>User List</Navbar.Brand>
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

      {/* Sección para mostrar la lista de usuarios */}
      <div>
        {/* Aplica el estilo al encabezado */}
        <div className={`table-responsive ${styles.userTable}`}>
          {/* Aplica los estilos CSS modulares */}
          <Table className={styles.table} striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
