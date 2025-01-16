
import React from 'react';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';

const AdminPanel = () => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Admin Paneli</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Çıkış</Nav.Link>
        </Nav>
      </Navbar>

      <div className="row">
  <div className="col-md-3">
    <ul className="nav flex-column">
      <li className="nav-item">
        <button className="nav-link active" onClick={() => console.log("Dashboard clicked")}>Dashboard</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" onClick={() => console.log("Kullanıcılar clicked")}>Kullanıcılar</button>
      </li>
    </ul>
   </div>
        <div className="col-md-9">
          <Card>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <Button variant="primary">Yeni Ekle</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;