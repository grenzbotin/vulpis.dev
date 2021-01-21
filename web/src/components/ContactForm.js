import React, { useState } from 'react';
import axios from 'axios';
import { Box, Input, Label, Textarea, Button, Text } from 'theme-ui';
import T from 'prop-types';
import { withTranslation } from 'react-i18next';

import LoadingIcon from './elements/LoadingIcon';

function RenderedForm({
  t,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
  loading,
  result,
}) {
  return (
    <>
      {result && result.success
        ? <Text>{t('home.contact.submit_success')}</Text>
        : (
          <>
          <Box mb={3} title={t('home.contact.opening.title')}>
            <Text>
              {t('home.contact.opening.text_1')}<br />
              {t('home.contact.opening.text_2')}
            </Text>
          </Box>
            <Box as="form" title="Contact form" onSubmit={handleSubmit}>
              <Box mb={3}>
                <Label htmlFor="name">{t('home.contact.name')}</Label>
                <Input id="name" className={errors.name && 'error'} name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {touched.name && errors.name && <Text variant="formErrorText">{t(`home.contact.validation.${errors.name}`)}</Text>}
              </Box>
              <Box mb={3}>
                <Label htmlFor="email">{t('home.contact.email')}</Label>
                <Input id="email" type="email" className={errors.email && 'error'} name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && errors.email && <Text variant="formErrorText">{t(`home.contact.validation.${errors.email}`)}</Text>}
              </Box>
              <Box mb={3} sx={{ display: 'none' }}>
                <Label htmlFor="company">{t('home.contact.company')}</Label>
                <Input id="company" name="company" onChange={handleChange} onBlur={handleBlur} />
              </Box>
              <Box mb={3}>
                <Label htmlFor="message">{t('home.contact.message')}</Label>
                <Textarea id="message" className={errors.message && 'error'} name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} />
                {touched.message && errors.message && <Text variant="formErrorText">{t(`home.contact.validation.${errors.message}`)}</Text>}
              </Box>
              <Box mb={5}>
                <Label htmlFor="human_check">{t('home.contact.human_check')}</Label>
                <Input id="human_check" className={errors.human_check && 'error'} name="human_check" value={values.human_check} onChange={handleChange} onBlur={handleBlur} />
                {touched.human_check && errors.human_check && <Text variant="formErrorText">{t(`home.contact.validation.${errors.human_check}`)}</Text>}
              </Box>
              {result && !result.success && (
                <Box mb={4}>
                  <Text variant="formErrorText">{t('home.contact.submit_error')}</Text>
                </Box>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button disabled={(Object.keys(errors).length > 0) || loading} variant="secondary" type="submit" sx={{ display: 'flex', alignItems: 'center' }}>
                  {t('home.contact.submit')} {loading && <LoadingIcon width={30} height={30} mL />}
                </Button>
              </Box>
            </Box>
          </>
        )}
    </>
  );
}

RenderedForm.propTypes = {
  t: T.func.isRequired,
  handleBlur: T.func.isRequired,
  handleChange: T.func.isRequired,
  handleSubmit: T.func.isRequired,
  values: T.shape({ name: T.string, email: T.string, message: T.string, human_check: T.string }).isRequired,
  touched: T.shape({ name: T.bool, email: T.bool, message: T.bool, human_check: T.bool }).isRequired,
  errors: T.shape({ name: T.string, email: T.string, message: T.string, human_check: T.string }).isRequired,
  loading: T.bool,
  result: T.shape({ success: T.bool }),
}


const TranslatedForm = withTranslation()(RenderedForm);

function ContactForm({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;
    const value = type === 'number' ? +newValue : newValue;

    setValues({
      ...values,
      [name]: value,
    });

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // eslint-disable-next-line
    const { [name]: removedError, ...rest } = errors;
    const error = validate[name](value);

    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      },
    );

    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    //eslint-disable-next-line
    const { company, ...filtered } = formValidation;
    if (
      !Object.values(formValidation.errors).length &&
      Object.values(formValidation.touched).length === Object.values(values).length &&
      Object.values(formValidation.touched).every(t => t === true)
    ) {
      setLoading(true);

      axios
        .post(`${window.configuration.BACKEND_URL}/send`, { ...values })
        .then(response => {
          setLoading(false);
          setResult(response.data);
        })
        .catch(() => {
          setLoading(false);
          setResult({ success: false });
        });
    }
  };

  return (
    <TranslatedForm
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      touched={touched}
      values={values}
      result={result}
      loading={loading}
    />
  );

}

ContactForm.propTypes = {
  validate: T.shape({}).isRequired,
  initialValues: T.shape(),
}

export default ContactForm;
