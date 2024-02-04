import React, { useEffect, useState } from "react";
import { validateInput } from "../my-form/action";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useFormStatus } from "react-dom";
import Loader from "../loader";

type Props = {
  errorMessage?: string;
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
};

function FormInput({ errorMessage, label, id, type, autoComplete }: Props) {
  const [liveErrorMessage, setLiveErrorMessage] = useState(errorMessage);
  const [hasValue, setHasValue] = useState(false);
  const { pending } = useFormStatus();

  const handleInputChange = async ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(currentTarget.value !== "");

    const message = await validateInput(
      currentTarget.value,
      currentTarget.name
    );

    setLiveErrorMessage(message);
  };

  useEffect(() => {
    if (!pending) {
      setLiveErrorMessage(errorMessage);
    }
  }, [errorMessage, pending]);

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          className={
            `block w-full rounded-md py-1.5 px-2 shadow-sm ring-1 focus:ring-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:bg-white ` +
            (!hasValue
              ? "ring-gray-300 text-gray-900"
              : liveErrorMessage
              ? "ring-pink-600 text-pink-600"
              : "ring-emerald-500 text-emerald-500")
          }
          required
          disabled={pending}
          onChange={handleInputChange}
        />

        <div className="absolute inset-y-0 right-2 flex items-center">
          {hasValue && (
            <>
              {!liveErrorMessage && (
                <CheckCircleIcon
                  className="h-5 w-5 text-emerald-600"
                  aria-hidden="true"
                />
              )}
              {liveErrorMessage && (
                <XCircleIcon
                  className="h-5 w-5 text-pink-600"
                  aria-hidden="true"
                />
              )}
            </>
          )}
        </div>
      </div>

      {hasValue && liveErrorMessage && (
        <p className="mt-2 text-pink-600 text-xs animate-in ease-in-out fade-in slide-in-from-top">
          {liveErrorMessage}
        </p>
      )}
    </>
  );
}

export default FormInput;
