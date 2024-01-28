"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string(),
});

interface FormState {
  message?: string;
  errors?: {};
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

  if (validatedFields.data.password !== validatedFields.data.confirmPassword) {
    return {
      errors: { password: "Passwords do not match" },
    };
  }

  redirect("/registered");
}
