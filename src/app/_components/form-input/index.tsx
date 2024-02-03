import React, { useEffect, useState } from "react";
import { validateInput } from "../my-form/action";

type Props = {
  errorMessage?: string;
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
  showErrorMessage?: boolean;
};

function FormInput({
  errorMessage,
  label,
  id,
  type,
  autoComplete,
  showErrorMessage = true,
}: Props) {
  const [liveMessage, setLiveMessage] = useState(errorMessage);

  const handleInputChange = async ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!showErrorMessage) return;

    const message = await validateInput(
      currentTarget.value,
      currentTarget.name
    );

    setLiveMessage(message);
  };

  useEffect(() => {
    setLiveMessage(errorMessage);
  }, [errorMessage]);

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          className={
            `block w-full rounded-md py-1.5 px-2 shadow-sm ring-1 focus:ring-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 ` +
            (liveMessage
              ? "ring-pink-600 text-pink-600"
              : "ring-gray-300 text-gray-900")
          }
          required
          onChange={handleInputChange}
        />
      </div>

      {showErrorMessage && liveMessage && (
        <p className="mt-2 text-pink-600 text-xs">{liveMessage}</p>
      )}
    </>
  );
}

export default FormInput;
