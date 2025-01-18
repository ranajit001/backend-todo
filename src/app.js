import express from 'express';
import mongoose from 'mongoose';
// import morgan from 'morgan';
import { globalErrorhandler } from './middlewares/globalErrorhandler.js';

import { TaskRouter } from './routes/task.route.js';
import { EmployeeRouter } from './routes/employee.route.js';
import { EmployerRouter } from './routes/employer.route.js';

const app = express();
app.use(express.json());
// app.use(morgan('dev'));
// app.use(cors({origin:  'http://127.0.0.1:5500'}));






app.use('/task',TaskRouter);
app.use('/employee',EmployeeRouter);
app.use('/employer',EmployerRouter)





app.use(globalErrorhandler);

// const port = 4444;
// app.listen(port,async()=>{
//     try{
//         // mongodb+srv://unit4:unit4hakathon@unit4.21hbz.mongodb.net/?retryWrites=true&w=majority&appName=unit4/todo'
       
//         await mongoose.connect(' mongodb+srv://wethree:we3three@unit4.ukvrv.mongodb.net/?retryWrites=true&w=majority&appName=unit4/todo');
//         console.log('Detabase connected'+'\n'+ 'Surver is running on port 4444')
//     }
//     catch(e){
//         globalErrorhandler(e, {}, { status: () => ({ send: console.log }) }, () => {});
//         // console.log({er:'errorfrom server', e:e})
//     }
// })


const port = 4444;
app.listen(port, async () => {
    try {
        await mongoose.connect('mongodb+srv://wethree:we3three@unit4.ukvrv.mongodb.net/?retryWrites=true&w=majority&appName=unit4/todo');
        console.log('Database connected\nServer is running on port', port);
    } catch (e) {
        // Invoke the global error handler with mock req/res
        globalErrorhandler(
            e,
            {}, // Mock `req` object (can expand if needed)
            {
                status: (statusCode) => ({
                    send: (message) => {
                        console.error(`Handled Error: ${message} (Status: ${statusCode})`);
                    },
                }),
            },
            () => {}
        );
    }
});
