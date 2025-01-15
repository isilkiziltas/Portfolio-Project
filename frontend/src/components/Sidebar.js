import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item>
        <Link to="/admin">Dashboard</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/admin/projects">Projects</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;