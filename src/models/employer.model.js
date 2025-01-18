import mongoose from "mongoose";


const employerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // post: {
    //     type: String,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: 
    {
        type: String,
    },
});
employerSchema.pre('save', function(next) {
    if (!this.role) {
      this.role = 'employer'; 
    }
    next(); 
  });

const EmployerModel = mongoose.model('employer',employerSchema);
export{EmployerModel};