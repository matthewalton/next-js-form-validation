import React, { useEffect, useState } from "react";

type Props = {
  errorMessage?: string;
  handleValidateInput: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<string>;
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
};

function FormInput({
  errorMessage,
  handleValidateInput,
  label,
  id,
  type,
  autoComplete,
}: Props) {
  const [liveMessage, setLiveMessage] = useState(errorMessage);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLiveMessage(await handleValidateInput(event));
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

      {liveMessage && (
        <p className="mt-2 text-pink-600 text-xs">{liveMessage}</p>
      )}
    </>
  );
}

export default FormInput;
