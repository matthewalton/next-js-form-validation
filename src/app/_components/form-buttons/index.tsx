"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Loader from "../loader";

function FormButtons() {
  const { pending } = useFormStatus();

  return (
    <div className="mt-6 flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md enabled:bg-gray-600 disabled:bg-gray-400 px-3 py-2 text-sm font-semibold enabled:text-white disabled:text-gray-200 shadow-sm enabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 flex items-center gap-2"
        disabled={pending}
      >
        {pending && (
          <>
            <Loader />
            Submitting...
          </>
        )}
        {!pending && "Submit"}
      </button>
    </div>
  );
}

export default FormButtons;
