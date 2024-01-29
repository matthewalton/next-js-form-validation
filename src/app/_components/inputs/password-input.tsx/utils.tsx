"use server";

import { passwordSchema } from "@/schemas";
import { z } from "zod";

const schema = z.object({
  password: passwordSchema,
});

export async function validatePassword(str: string): Promise<string> {
  if (str.length < 4) {
    return "";
  }

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
