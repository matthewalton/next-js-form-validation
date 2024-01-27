import React from "react";

function PasswordInput() {
  return (
    <>
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
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6"
          />
        </div>
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
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
