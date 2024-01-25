import React from "react";
import FirstNameInput from "../form-inputs/first-name-input";
import LastNameInput from "../form-inputs/last-name-input";
import EmailInput from "../form-inputs/email-input";
import CountryInput from "../form-inputs/country-input";
import StreetAddressInput from "../form-inputs/street-address-input";
import CityInput from "../form-inputs/city-input";
import StateInput from "../form-inputs/state-input";
import PostcodeInput from "../form-inputs/postcode-input";

function FormPersonal() {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <FirstNameInput />
        </div>

        <div className="sm:col-span-3">
          <LastNameInput />
        </div>

        <div className="sm:col-span-4">
          <EmailInput />
        </div>

        <div className="sm:col-span-3">
          <CountryInput />
        </div>

        <div className="col-span-full">
          <StreetAddressInput />
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <CityInput />
        </div>

        <div className="sm:col-span-2">
          <StateInput />
        </div>

        <div className="sm:col-span-2">
          <PostcodeInput />
        </div>
      </div>
    </div>
  );
}

export default FormPersonal;
