/**
 * @summary
 * Global error handling middleware
 *
 * @module middleware/error
 *
 * @description
 * Provides centralized error handling for all API endpoints.
 * Formats error responses consistently and logs errors for monitoring.
 */

import { Request, Response, NextFunction } from 'express';

/**
 * @interface ErrorResponse
 * @description Standard error response format
 *
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details
 * @property {string} error.code - Error code identifier
 * @property {string} error.message - Human-readable error message
 * @property {any} [error.details] - Additional error context
 * @property {string} timestamp - ISO timestamp of error occurrence
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Express error handling middleware
 *
 * @function errorMiddleware
 *
 * @param {any} err - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 */
export async function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  console.error('Error occurred:', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  const statusCode = err.statusCode || err.status || 500;
  const errorCode = err.code || 'INTERNAL_SERVER_ERROR';
  const errorMessage = err.message || 'An unexpected error occurred';

  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: errorCode,
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
    timestamp: new Date().toISOString(),
  };

  res.status(statusCode).json(errorResponse);
}
