"use client";

import React from "react";
import FormPersonal from "../form-personal";
import FormButtons from "../form-buttons";
import { useFormState } from "react-dom";
import { registerUser } from "./action";

const initialState = {
  message: "",
};

function MyForm() {
  const [formState, formAction] = useFormState(registerUser, initialState);

  return (
    <form
      className="rounded-lg ring-1 ring-zinc-300 bg-zinc-100 p-6"
      action={formAction}
    >
      <div className="space-y-12">
        <FormPersonal />
      </div>

      <p aria-live="polite" className="sr-only">
        {formState?.message}
      </p>

      <FormButtons />
    </form>
  );
}

export default MyForm;
