const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    title: String,
    description: String,
})

module.exports = mongoose.model('prod', prodSchema);
