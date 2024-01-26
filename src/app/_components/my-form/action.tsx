"use server";

interface FormState {
  message: string;
}

export async function registerUser(
  prevFormState: FormState | null,
  formData: FormData
): Promise<FormState | null> {
  try {
    return null;
  } catch (e) {
    throw new Error("Failed to register user.");
  }
}
