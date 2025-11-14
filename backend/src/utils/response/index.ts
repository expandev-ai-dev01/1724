/**
 * @summary
 * Response formatting utilities
 *
 * @module utils/response
 *
 * @description
 * Provides standardized response formatting functions for API endpoints.
 */

/**
 * @interface SuccessResponse
 * @description Standard success response format
 *
 * @property {boolean} success - Always true for successful responses
 * @property {T} data - Response data payload
 * @property {object} [metadata] - Optional response metadata
 * @property {string} metadata.timestamp - ISO timestamp of response
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

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
export interface ErrorResponse {
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
 * Creates a standardized success response
 *
 * @function successResponse
 *
 * @param {T} data - Response data payload
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary
 * Creates a standardized error response
 *
 * @function errorResponse
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code
 * @param {any} [details] - Additional error details
 *
 * @returns {ErrorResponse} Formatted error response
 */
export function errorResponse(message: string, code?: string, details?: any): ErrorResponse {
  return {
    success: false,
    error: {
      code: code || 'ERROR',
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
