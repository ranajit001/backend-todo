import express from "express";
import { EmployeecreatProfile,EmployeegetProfile,EmployeeupdateProfile,EmployeedeleteProfile } from "../controllers/Employee.controller.js";

const EmployeeRouter = express.Router();

EmployeeRouter.get('/:id?',EmployeegetProfile);
EmployeeRouter.post('/create',EmployeecreatProfile);
EmployeeRouter.put('/update/:id',EmployeeupdateProfile);
EmployeeRouter.delete('/delete/:id',EmployeedeleteProfile);


export{EmployeeRouter};
