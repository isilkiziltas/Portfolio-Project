const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'in-progress' }, 
  createdAt: { type: Date, default: Date.now }
});
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;