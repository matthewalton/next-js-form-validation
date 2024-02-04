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

interface Errors {
  [key: string]: string[] | undefined;
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
      confirmPassword: formData.get("confirmPassword"),
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
        errors: {
          confirmPassword: "Passwords do not match",
        },
      };
    }
  } catch (e) {
    return { message: "Connection error, please refresh the page" };
  }

  redirect("/registered");
}

export async function validateInput(
  value: string,
  name: string
): Promise<string> {
  const validatedFields = schema.safeParse({
    [name]: value,
  });

  if (!validatedFields.success) {
    const allErrors: Errors = validatedFields.error.flatten().fieldErrors;

    if (allErrors) {
      const errors = allErrors[name];

      if (errors) {
        return errors[0];
      }
    }
  }

  return "";
}
