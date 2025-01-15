import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Form } from 'react-bootstrap';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '', category: '', imageUrl: '' });

  // Projeleri getir
  useEffect(() => {
    axios.get('http://localhost:3000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.log(error));
  }, []);

  // Yeni proje ekle
  const handleAddProject = () => {
    axios.post('http://localhost:3000/api/projects', newProject)
      .then(response => setProjects([...projects, response.data]))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Projects</h2>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" value={newProject.imageUrl} onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })} />
        </Form.Group>
        <Button variant="primary" onClick={handleAddProject}>Add Project</Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project._id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.category}</td>
              <td><img src={project.imageUrl} alt={project.name} width="100" /></td>
              <td>
                <Button variant="warning" onClick={() => {/* edit project */}}>Edit</Button>
                <Button variant="danger" onClick={() => {/* delete project */}}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectsPage;