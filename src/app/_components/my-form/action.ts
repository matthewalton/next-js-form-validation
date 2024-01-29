"use server";

import { emailSchema, passwordSchema, usernameSchema } from "@/schemas";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
});

export interface FormState {
  message?: string;
  errors?: any;
}

export async function registerUser(
  prevFormState: FormState | null,
  formData: FormData
): Promise<FormState> {
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
