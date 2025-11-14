/**
 * @summary
 * Note API controller for CRUD operations
 *
 * @module api/v1/internal/note/controller
 *
 * @description
 * Handles HTTP requests for note management operations.
 * All endpoints require authentication and enforce multi-tenancy.
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { noteCreate } from '@/services/note';
import { successResponse, errorResponse } from '@/utils/response';
import { zRequiredString, zFK } from '@/utils/validation';

/**
 * @api {post} /api/v1/internal/note Create Note
 * @apiName CreateNote
 * @apiGroup Note
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new note with title and content
 *
 * @apiParam {Number} idAccount Account identifier
 * @apiParam {Number} idUser User identifier
 * @apiParam {String} title Note title (max 255 characters)
 * @apiParam {String} content Note content
 *
 * @apiSuccess {Number} idNote Created note identifier
 *
 * @apiError {String} titleRequired Title is required
 * @apiError {String} titleExceedsMaxLength Title exceeds 255 characters
 * @apiError {String} contentRequired Content is required
 * @apiError {String} accountDoesntExist Invalid account
 * @apiError {String} userDoesntExist Invalid user or user not associated with account
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const bodySchema = z.object({
    idAccount: zFK,
    idUser: zFK,
    title: zRequiredString(255),
    content: z.string().min(1, 'Content cannot be empty'),
  });

  try {
    const validated = bodySchema.parse(req.body);

    const result = await noteCreate(validated);

    res.status(201).json(successResponse(result));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .json(errorResponse(error.errors[0].message, 'VALIDATION_ERROR', error.errors));
    } else if (error.number === 51000) {
      res.status(400).json(errorResponse(error.message));
    } else {
      next(error);
    }
  }
}
