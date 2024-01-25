import React from "react";

function CountryInput() {
  return (
    <>
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Country
      </label>
      <div className="mt-2">
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </>
  );
}

export default CountryInput;
