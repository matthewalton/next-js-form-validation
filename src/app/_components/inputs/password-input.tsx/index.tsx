import React, { useState } from "react";
import { validatePassword } from "./utils";

type Props = {
  errorMessage?: string;
};

function PasswordInput({ errorMessage }: Props) {
  const [liveMessage, setLiveMessage] = useState(errorMessage);

  const handlePasswordCheck = async ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const message = await validatePassword(currentTarget.value);
    setLiveMessage(message);
  };

  return (
    <>
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
            (liveMessage
              ? "ring-pink-600 text-pink-600"
              : "ring-gray-300 text-gray-900")
          }
          required
          onChange={handlePasswordCheck}
        />
      </div>
      {liveMessage && (
        <p className="mt-2 text-pink-600 text-xs">{liveMessage}</p>
      )}
    </>
  );
}

export default PasswordInput;
