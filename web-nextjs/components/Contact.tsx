import React from "react";

import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const nameValidation = (value: string): string | null => {
    if (value.trim() === "") {
      return "name_is_required";
    }

    if (/[^a-zA-Z0-9_äÄöÖüÜß -]/.test(value)) {
      return "invalid_characters";
    }

    if (value.trim().length < 3) {
      return "name_3_characters";
    }

    return null;
  };

  const textValidation = (value: string): string | null => {
    if (value.trim() === "") {
      return "message_is_required";
    }

    if (/[^A-Za-z0-9\s!@#$€%^&*()_äÄöÖüÜß+=\-~\\[{}|"';:/.,?><]/.test(value)) {
      return "invalid_characters";
    }

    if (value.trim().length < 3) {
      return "message_3_characters";
    }

    return null;
  };

  const emailValidation = (email: string): string | null => {
    if (
      // eslint-disable-next-line max-len
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
        email
      )
    ) {
      return null;
    }

    if (email.trim() === "") {
      return "email_required";
    }

    return "please_valid_email";
  };

  const numberValidation = (value: string): string | null => {
    if (value === "32") {
      return null;
    }

    if (value.trim() === "") {
      return "human_check_required";
    }

    return "human_check_not_correct";
  };

  type validateType = (name: string) => string | null;
  const validate: { [key: string]: validateType } = {
    name: nameValidation,
    email: emailValidation,
    message: textValidation,
    company: () => null,
    human_check: numberValidation,
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
    company: "",
    human_check: "",
  };

  return <ContactForm validate={validate} initialValues={initialValues} />;
};

export default Contact;
