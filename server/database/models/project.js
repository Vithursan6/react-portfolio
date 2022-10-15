

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true, maxlength: 128},
    description: { type: String, required: true},
    technologies: { type: String, required: true},
    url: { type: String, required: true},
    isCurrentlyDeployed: { type: Boolean, required: false},
    createdAt: { type:Date, default: Date.now }

})

module.exports = mongoose.model('Project', projectSchema);