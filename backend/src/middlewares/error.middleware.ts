import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../types/http-error.js';

export const errorMiddleware = (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Server error' });
};
