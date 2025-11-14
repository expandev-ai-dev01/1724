/**
 * @summary
 * Validation utility functions using Zod
 *
 * @module utils/validation
 *
 * @description
 * Provides reusable Zod validation schemas and helper functions.
 */

import { z } from 'zod';

/**
 * @summary
 * Validates a string with maximum length
 *
 * @function zString
 *
 * @param {number} maxLength - Maximum allowed length
 *
 * @returns {z.ZodString} Zod string schema
 */
export const zString = (maxLength: number) => z.string().max(maxLength);

/**
 * @summary
 * Validates a required string that cannot be empty
 *
 * @function zRequiredString
 *
 * @param {number} maxLength - Maximum allowed length
 *
 * @returns {z.ZodString} Zod string schema
 */
export const zRequiredString = (maxLength: number) =>
  z.string().min(1, 'Field cannot be empty').max(maxLength);

/**
 * @summary
 * Validates a positive integer
 *
 * @constant zPositiveInt
 */
export const zPositiveInt = z.number().int().positive();

/**
 * @summary
 * Validates a foreign key (positive integer)
 *
 * @constant zFK
 */
export const zFK = z.number().int().positive();
