import React from "react";

function StateInput() {
  return (
    <>
      <label
        htmlFor="region"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        State / Province
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="region"
          id="region"
          autoComplete="address-level1"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}

export default StateInput;