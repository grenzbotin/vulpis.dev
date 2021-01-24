import React from 'react';

import ContactForm from './ContactForm';

function Contact() {
  const stringValidationName = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldName}_is_required`;
    }

    if (/[^a-zA-Z0-9 -]/.test(fieldValue)) {
      return 'invalid_characters';
    }

    if (fieldValue.trim().length < 3) {
      return `${fieldName}_3_characters`;
    }

    return null;
  };

  const textValidationName = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldName}_is_required`;
    }

    if (/[^A-Za-z0-9\s!@#$€%^&*()_+=\-~\\[{}|"';:/.,?><]/.test(fieldValue)) {
      return 'invalid_characters';
    }

    if (fieldValue.trim().length < 3) {
      return `${fieldName}_3_characters`;
    }

    return null;
  };
  
  const emailValidation = email => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return null;
    }

    if (email.trim() === '') {
      return 'email_required';
    }

    return 'please_valid_email';
  };

  const numberValidation = value => {
    if (value === '32') {
      return null;
    }

    if (value.trim() === '') {
      return 'human_check_required';
    }

    return 'human_check_not_correct';
  }

  const validate = {
    name: value => stringValidationName('name', value),
    email: emailValidation,
    message: value => textValidationName('message', value),
    company: () => null,
    human_check: numberValidation,
  };
  
  const initialValues = {
    name: '',
    email: '',
    message: '',
    company: '',
    human_check: '',
  };

  return (<ContactForm validate={validate} initialValues={initialValues} />);
}

export default Contact;
