import React from "react";

type Props = {
  errorMessage?: string;
};

function UsernameInput({ errorMessage }: Props) {
  return (
    <>
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
            (errorMessage
              ? "ring-pink-600 text-pink-600"
              : "ring-gray-300 text-gray-900")
          }
          autoFocus
          required
        />
        {errorMessage && (
          <p className="mt-2 text-pink-600 text-xs">{errorMessage}</p>
        )}
      </div>
    </>
  );
}

export default UsernameInput;
