import React from "react";
import UsernameInput from "../form-inputs/username-input";
import AboutInput from "../form-inputs/about-input";

function FormProfile() {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Profile
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        This information will be displayed publicly so be careful what you
        share.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <UsernameInput />
        </div>

        <div className="col-span-full">
          <AboutInput />
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
