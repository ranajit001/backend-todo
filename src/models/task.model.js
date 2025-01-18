import mongoose from "mongoose";

// const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Employer model
        ref: 'employer',
        required: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Employee model
        ref: 'employee',
        required: true,
    },
    // timeSpent: {
    //     type: Number, // In hours
    //     required: true,
    // },
    // priority: {
    //     type: String,
    //     require:true,
    //     enum: ['Low', 'Medium', 'High'],
    //     default: 'Medium',
    // },
    // category: {
    //     type: String,
    //     enum: ['BAU', 'Ad Hoc', 'Project-Based'],
    //     required: true,
    // },
    // reference: {
    //     type: String,
    //     required: false,
    // },
    // attachments: {
    //     type: [String], // Array of URLs or file paths
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});

// module.exports = mongoose.model('Task', taskSchema);
const TaskModel = mongoose.model('task',taskSchema);
export{TaskModel}
