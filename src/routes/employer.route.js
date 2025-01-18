import { EmployeRcreatProfile,EmployeRgetProfileById,EmployeRdeleteProfile,EmployeRupdateProfile} from "../controllers/Employer.controller.js";
import express from "express";

const EmployerRouter = express.Router();

EmployerRouter.get('/:id?',EmployeRgetProfileById);
EmployerRouter.post('/create',EmployeRcreatProfile);
EmployerRouter.put('/update/:id',EmployeRupdateProfile);
EmployerRouter.delete('/delete/:id',EmployeRdeleteProfile);

export{EmployerRouter};


