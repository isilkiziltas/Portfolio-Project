const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Projeleri Listele
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Yeni Proje Ekle
router.post('/', async (req, res) => {
  const { name, description, category, imageUrl } = req.body;
  try {
    const newProject = new Project({ name, description, category, imageUrl });
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Proje Güncelle
router.put('/:id', async (req, res) => {
  const { name, description, category, imageUrl } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description, category, imageUrl },
      { new: true }
    );
    res.json(updatedProject);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Proje Sil
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Project deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;