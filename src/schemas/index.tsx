import { z } from "zod";

/**
 * User
 */
export const usernameSchema = z
  .string()
  .max(30, "Username must be under 30 characters");

export const emailSchema = z
  .string()
  .email()
  .max(50, "Email must be under 30 characters");

/**
 * Password
 */

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");
