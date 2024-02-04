"use client";

import React from "react";
import FormButtons from "../form-buttons";
import { useFormState } from "react-dom";
import { registerUser } from "./action";
import FormInput from "../form-input";

function MyForm() {
  const [formState, formAction] = useFormState(registerUser, null);

  return (
    <form
      className="rounded-lg ring-1 ring-zinc-300 bg-zinc-100 p-6 duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-4 w-full max-w-2xl"
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
          <FormInput
            label="Username"
            id="username"
            type="text"
            autoComplete="username"
            errorMessage={formState?.errors?.username}
          />
        </div>

        <div className="sm:col-span-6">
          <FormInput
            label="Email address"
            id="email"
            type="email"
            autoComplete="email"
            errorMessage={formState?.errors?.email}
          />
        </div>

        <div className="sm:col-span-3">
          <FormInput
            label="Password"
            id="password"
            type="password"
            autoComplete="password"
            errorMessage={formState?.errors?.password}
          />
        </div>

        <div className="sm:col-span-3">
          <FormInput
            label="Confirm password"
            id="confirmPassword"
            type="password"
            autoComplete="password"
            errorMessage={formState?.errors?.confirmPassword}
          />
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
