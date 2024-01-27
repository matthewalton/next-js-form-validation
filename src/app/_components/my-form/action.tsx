"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

interface FormState {
  message?: string;
  errors?: { email?: string[] | undefined };
}

export async function registerUser(
  prevFormState: FormState | null,
  formData: FormData
): Promise<FormState | null> {
  const validatedFields = schema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return null;
}
