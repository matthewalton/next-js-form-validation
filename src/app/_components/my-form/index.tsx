"use client";

import React from "react";
import FormButtons from "../form-buttons";
import { useFormState } from "react-dom";
import { registerUser, FormState } from "./action";
import UsernameInput from "../inputs/username-input";
import EmailInput from "../inputs/email-input";
import PasswordInput from "../inputs/password-input.tsx";
import ConfirmPasswordInput from "../inputs/confirm-password-input";

const initialState: FormState | null = null;

function MyForm() {
  const [formState, formAction] = useFormState(registerUser, initialState);

  return (
    <form
      className="rounded-lg ring-1 ring-zinc-300 bg-zinc-100 p-6 duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-4 w-full max-w-2xl"
      action={formAction}
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        User Registration
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Please enter your details to complete registration. (Just a demo - no
        details are collected.)
      </p>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <UsernameInput errorMessage={formState?.errors?.username} />
        </div>

        <div className="sm:col-span-6">
          <EmailInput errorMessage={formState?.errors?.email} />
        </div>

        <div className="sm:col-span-3">
          <PasswordInput errorMessage={formState?.errors?.password} />
        </div>

        <div className="sm:col-span-3">
          <ConfirmPasswordInput errorMessage={formState?.errors?.password} />
        </div>
      </div>

      {formState?.message && (
        <p className="text-sm text-pink-600 mt-5 text-right">
          {formState.message}
        </p>
      )}

      <FormButtons />
    </form>
  );
}

export default MyForm;
