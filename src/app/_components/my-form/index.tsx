"use client";

import React from "react";
import FormButtons from "../form-buttons";
import { useFormState } from "react-dom";
import { registerUser } from "./action";

const initialState: { message?: string; errors?: any } = {
  message: "",
  errors: {},
};

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
        Please enter your details to complete registration.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className={
                `block w-full rounded-md py-1.5 px-2 shadow-sm ring-1 focus:ring-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 ` +
                (formState?.errors?.username
                  ? "ring-pink-600 text-pink-600"
                  : "ring-gray-300 text-gray-900")
              }
              autoFocus
              required
            />
            {formState?.errors?.username && (
              <p className="mt-2 text-pink-600 text-xs">
                {formState.errors.username}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={
                `block w-full rounded-md py-1.5 px-2 shadow-sm ring-1 focus:ring-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 ` +
                (formState?.errors?.email
                  ? "ring-pink-600 text-pink-600"
                  : "ring-gray-300 text-gray-900")
              }
              required
            />
          </div>
          {formState?.errors?.email && (
            <p className="mt-2 text-pink-600 text-xs">
              {formState.errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className={
                `block w-full rounded-md py-1.5 px-2 shadow-sm ring-1 focus:ring-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 ` +
                (formState?.errors?.password
                  ? "ring-pink-600 text-pink-600"
                  : "ring-gray-300 text-gray-900")
              }
              required
            />
          </div>
          {formState?.errors?.password && (
            <p className="mt-2 text-pink-600 text-xs">
              {formState.errors.password}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              autoComplete="password"
              className={
                `block w-full rounded-md py-1.5 px-2 shadow-sm ring-1 focus:ring-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 ` +
                (formState?.errors?.password
                  ? "ring-pink-600 text-pink-600"
                  : "ring-gray-300 text-gray-900")
              }
              required
            />
          </div>
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
