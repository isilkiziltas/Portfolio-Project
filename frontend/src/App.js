
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techArray = technologies.split(','); // Teknolojiler virgülle ayrılmış olmalı

    const response = await axios.post('http://localhost:3000/add-project', {
      title,
      description,
      technologies: techArray,
    });

    if (response.status === 201) {
      alert('Proje başarıyla eklendi');
    }
  };

  return (
    <div className="admin-panel">
      <h2>Proje Ekle</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Proje Başlığı</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Proje Açıklaması</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTechnologies">
          <Form.Label>Teknolojiler (virgülle ayırarak yazınız)</Form.Label>
          <Form.Control
            type="text"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Proje Ekle</Button>
      </Form>
    </div>
  );
};

export default AdminPanel;