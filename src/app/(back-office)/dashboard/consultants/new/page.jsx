import FormHeader from "@/components/backOffice/FormHeader";
import ConsultantForm from "@/components/backOffice/forms/ConsultantForm";
import React from "react";

export default function page() {
  return (
    <div>
      <FormHeader title="New Consultant" />
      <ConsultantForm />
    </div>
  );
}
