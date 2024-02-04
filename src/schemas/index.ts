import { z } from "zod";

/**
 * User
 */
export const usernameSchema = z
  .string()
  .max(30, "Username must be under 30 characters");

export const emailSchema = z
  .string()
  .email("Email must be a valid email address")
  .max(50, "Email must be under 30 characters");

/**
 * Password
 */

const forbiddenPasswords = [
  "password",
  "12345678",
  "123456789",
  "qwerty123",
  "password1",
  "iloveyou",
  "11111111",
  "1234567890",
  "123123123",
];

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine((data) => !forbiddenPasswords.includes(data.toLowerCase()), {
    message: `Password must not be a common, easily guessable password.`,
  });
