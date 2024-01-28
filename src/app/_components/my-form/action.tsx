"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  username: z.string().max(30, "Username must be under 30 characters"),
  email: z.string().email().max(50, "Email must be under 30 characters"),
  password: z.string().min(8).max(30, "Password must be under 30 characters"),
  confirmPassword: z.string().min(8).max(30),
});

interface FormState {
  message?: string;
  errors?: {};
}

export async function registerUser(
  prevFormState: FormState | null,
  formData: FormData
): Promise<FormState | null> {
  try {
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

    if (
      validatedFields.data.password !== validatedFields.data.confirmPassword
    ) {
      return {
        errors: { password: "Passwords do not match" },
      };
    }
  } catch (e) {
    return { message: "Connection error, please refresh the page" };
  }

  redirect("/registered");
}
