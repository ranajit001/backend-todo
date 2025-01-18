import mongoose from "mongoose";


const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
    },
});
employeeSchema.pre('save', function(next) {
    if (!this.role) {
      this.role = 'employee'; 
    }
    next(); 
  });

const EmployeeModl = mongoose.model('employee',employeeSchema);
export{EmployeeModl}