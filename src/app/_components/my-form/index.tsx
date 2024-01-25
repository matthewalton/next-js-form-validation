import React from "react";
import FormProfile from "../form-profile";
import FormPersonal from "../form-personal";
import FormButtons from "../form-buttons";

function MyForm() {
  return (
    <form className="rounded-lg ring-1 ring-zinc-300 bg-zinc-100 p-6">
      <div className="space-y-12">
        <FormProfile />

        <FormPersonal />
      </div>

      <FormButtons />
    </form>
  );
}

export default MyForm;
