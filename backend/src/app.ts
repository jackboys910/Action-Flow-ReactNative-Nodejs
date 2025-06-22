import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { taskRouter } from './routes/task.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

dotenv.config();
await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on :${PORT}`));
