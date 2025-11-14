/**
 * @summary
 * Business logic for note operations
 *
 * @module services/note/noteRules
 *
 * @description
 * Implements business rules and database operations for note management.
 * All operations enforce multi-tenancy through account-based isolation.
 */

import sql from 'mssql';
import { getPool } from '@/instances/database';
import { NoteCreateRequest, NoteCreateResponse } from './noteTypes';

/**
 * @summary
 * Creates a new note in the database
 *
 * @function noteCreate
 *
 * @param {NoteCreateRequest} params - Note creation parameters
 * @param {number} params.idAccount - Account identifier
 * @param {number} params.idUser - User identifier
 * @param {string} params.title - Note title
 * @param {string} params.content - Note content
 *
 * @returns {Promise<NoteCreateResponse>} Created note identifier
 *
 * @throws {Error} titleRequired - When title is empty
 * @throws {Error} titleExceedsMaxLength - When title exceeds 255 characters
 * @throws {Error} contentRequired - When content is empty
 * @throws {Error} accountDoesntExist - When account is invalid
 * @throws {Error} userDoesntExist - When user is invalid or not associated with account
 */
export async function noteCreate(params: NoteCreateRequest): Promise<NoteCreateResponse> {
  const pool = await getPool();

  const result = await pool
    .request()
    .input('idAccount', sql.Int, params.idAccount)
    .input('idUser', sql.Int, params.idUser)
    .input('title', sql.NVarChar(255), params.title)
    .input('content', sql.NVarChar(sql.MAX), params.content)
    .execute('[functional].[spNoteCreate]');

  return result.recordset[0];
}
