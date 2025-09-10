const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filePath: {
        type: String,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('File', fileSchema);