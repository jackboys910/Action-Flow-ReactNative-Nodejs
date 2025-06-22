import { Schema, model } from 'mongoose';
import { ITask } from '../interfaces/ITask';

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true, minlength: 1, maxlength: 30 },
    description: { type: String, maxlength: 100 },
    status: {
      type: String,
      enum: ['In Progress', 'Completed'],
      default: 'In Progress',
    },
    isImportant: { type: Boolean, default: false },
  },
  { timestamps: true, toJSON: { virtuals: true, versionKey: false } },
);

taskSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

taskSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
  },
});

export const TaskModel = model<ITask>('Task', taskSchema);
