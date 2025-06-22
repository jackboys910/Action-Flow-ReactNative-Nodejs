import { TaskModel } from '../models/task.model.js';
export const getTasks = async (req, res, next) => {
    try {
        const { status, important } = req.query;
        const query = {};
        if (status)
            query.status = status;
        if (important === 'true')
            query.isImportant = true;
        const tasks = await TaskModel.find(query).sort({ createdAt: -1 });
        res.json(tasks);
    }
    catch (e) {
        next(e);
    }
};
export const createTask = async (req, res, next) => {
    try {
        const task = await TaskModel.create(req.body);
        res.status(201).json(task);
    }
    catch (e) {
        next(e);
    }
};
export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(task);
    }
    catch (e) {
        next(e);
    }
};
export const deleteTask = async (req, res, next) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
};
