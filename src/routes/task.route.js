import express from "express";
import { getAllTasks,createTask,updateTask,deleteTask } from "../controllers/task.controller.js";

const TaskRouter = express.Router();

TaskRouter.get('/',getAllTasks);
TaskRouter.post('/create',createTask);
TaskRouter.put('/update/:id',updateTask);
TaskRouter.delete('/delete/:id',deleteTask);

export{TaskRouter};

