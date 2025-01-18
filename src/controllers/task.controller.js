// const Task = require('../models/taskModel');
import { TaskModel } from "../models/task.model.js";
import { EmployerModel } from "../models/employer.model.js";
import { EmployeeModl } from "../models/employee.model.js";

// Create a new task
// exports.createTask = async (req, res) => {
    const createTask = async (req, res,next) => {
        try {
            const { title, description, assignedBy, assignedTo } = req.body;
    
            // Validate assignedBy (Employer)
            const employer = await EmployerModel.findById(assignedBy);
            if (!employer) {
                return res.status(404).json({ message: 'Employer not found' });
            }
    
            // Validate assignedTo (Employee)
            const employee = await EmployeeModl.findById(assignedTo);
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            };
    
            // Create the task
            const task = new TaskModel({ title, description, assignedBy, assignedTo });
            await task.save();
    
            res.status(201).json({ message: 'Task created successfully!', task });
        } catch (error) {
            next(error); // Pass error to global error handler
        }
    };


    // {
    //     "title": "Design new homepage",
    //     "description": "Create a new homepage design by Friday.",
    //     "assignedBy": "63c2e2a0f28f5e65a4c8b0e1",  // Employer ID
    //     "assignedTo": "63c2e2a0f28f5e65a4c8b0e2"   // Employee ID
    // }
    



    

    // Get tasks by employee ID, employer ID, or task ID, or get total number of tasks
    const getAllTasks = async (req, res, next) => {
        try {
            const { employeeId, employerId, taskId } = req.query; // Extract query parameters
    
            // Build a filter object based on the provided query parameters
            let filter = {};
    
            if (taskId) {
                // If taskId is provided, search by taskId
                filter._id = taskId;
            } else {
                // If employerId is provided, filter tasks assigned by this employer
                if (employerId) {
                    filter.assignedBy = employerId;
                }
    
                // If employeeId is provided, filter tasks assigned to this employee
                if (employeeId) {
                    filter.assignedTo = employeeId;
                }
            }
    
            // Query the tasks collection based on the filter
            const tasks = await TaskModel.find(filter);
    
            // If no tasks are found, return a 404 error
            if (tasks.length === 0) {
                return res.status(404).json({ message: 'No tasks found matching the criteria.' });
            }
    
            // // If no specific query is given, return the total count of tasks
            // if (!employeeId && !employerId && !taskId) {
            //     const totalTasks = await TaskModel.countDocuments();
            //     return res.status(200).json({ message: 'Total tasks count', totalTasks });
            // }
    
            res.status(200).json({ message: 'Tasks found', tasks });
        } catch (error) {
            next(error); // Pass the error to the global error handler
        }
    };
    
  
    

// Update a task
const updateTask = async (req, res,next) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully!', task });
    } catch (error) {
        // res.status(500).json({ message: 'Error updating task', error });
        next(error);
        console.log('erro from update task task');
    }
};

// Delete a task
const deleteTask = async (req, res,next) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully!' });
    } catch (error) {
        // res.status(500).json({ message: 'Error deleting task', error });
        next(error);
        console.log('erro from delete task');
    }
};


export{createTask,getAllTasks,updateTask,deleteTask};

