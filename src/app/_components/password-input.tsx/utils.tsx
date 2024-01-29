"use server";

import { z } from "zod";

const schema = z.object({
  password: z.string().min(8),
});

export async function validatePassword(str: string): Promise<string> {
  const validatedFields = schema.safeParse({
    password: str,
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors?.password;

    if (errors) {
      return errors[0];
    }
  }

  return "";
}
