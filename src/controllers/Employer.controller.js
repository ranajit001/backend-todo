import { EmployerModel } from "../models/employer.model.js";








// Get a profiledetails by ID
const EmployeRgetProfileById = async (req, res,next) => {
    let task =null
    try {
        if(req.params.id)
         task = await EmployerModel.findById(req.params.id);
    else {
        task = await EmployerModel.find();
    }
    if (!task || (Array.isArray(task) && task.length === 0)) {
        return res.status(404).json({ message: 'Profile not found' });
    }
        res.status(200).json(task);
    } catch (error) {
        // res.status(500).json({ message: 'Error fetching task', error });
        next(error);
        console.log('error from get employeR profile by id.')
    }
};

const  EmployeRcreatProfile = async (req, res,next) => {
    try {
        const task = new EmployerModel(req.body);
        await task.save();
        res.status(201).json({ message: 'Profile created successfully!', task });
    } catch (error) {
        // res.status(500).json({ message: 'Error creating task', error.message });
        next(error);
        console.log('error from create employeR profile')

    }
};


const EmployeRupdateProfile = async (req, res,next) => {
    try {
        const task = await EmployerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json({ message: 'Profile updated successfully!', task });
    } catch (error) {
        // res.status(500).json({ message: 'Error updating task', error });
        next(error);
        console.log('erro from update employee profile');
    }
};

const EmployeRdeleteProfile = async (req, res,next) => {
    try {
        const task = await EmployerModel.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json({ message: ' Employee Profile deleted successfully!' });
    } catch (error) {
        // res.status(500).json({ message: 'Error deleting task', error });
        next(error);
        console.log('error from delete employeR profile');
    }
};


export{EmployeRcreatProfile,EmployeRgetProfileById,EmployeRdeleteProfile,EmployeRupdateProfile}