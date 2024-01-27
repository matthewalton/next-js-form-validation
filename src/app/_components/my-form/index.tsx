"use client";

import React from "react";
import FormButtons from "../form-buttons";
import { useFormState } from "react-dom";
import { registerUser } from "./action";
import EmailInput from "../form-inputs/email-input";
import UsernameInput from "../form-inputs/username-input";
import PasswordInput from "../form-inputs/password-input";

const initialState = {
  message: "",
  errors: {},
};

function MyForm() {
  const [formState, formAction] = useFormState(registerUser, initialState);

  return (
    <form
      className="rounded-lg ring-1 ring-zinc-300 bg-zinc-100 p-6"
      action={formAction}
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        User Registration
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Please enter your details to complete registration.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <UsernameInput />
        </div>

        <div className="sm:col-span-6">
          <EmailInput />
        </div>

        <PasswordInput />
      </div>

      <p aria-live="polite" className="sr-only">
        {formState?.message}
      </p>

      <FormButtons />
    </form>
  );
}

export default MyForm;
