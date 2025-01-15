
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Proje modelini oluşturma
const Project = mongoose.model('Project', {
  title: String,
  description: String,
  technologies: [String],
});

// Proje ekleme
app.post('/add-project', async (req, res) => {
  const { title, description, technologies } = req.body;
  const newProject = new Project({ title, description, technologies });
  await newProject.save();
  res.status(201).send('Proje eklendi');
});

app.listen(3000, () => {
  console.log('Backend server running on port 3000');
});