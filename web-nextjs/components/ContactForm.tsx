import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { Box, Input, Label, Textarea, Button, Text } from 'theme-ui';
import useTranslation from 'next-translate/useTranslation';

import LoadingIcon from './elements/LoadingIcon';
import { secrets } from '../lib/utils';

interface Result {
  success: boolean;
}

interface RenderedFormProps {
  errors: Record<string, string>;
  handleBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (event: FormEvent) => void;
  touched: Record<string, boolean>;
  values: {
    name: string;
    email: string;
    message: string;
    company: string;
    human_check: string;
  };
  loading: boolean;
  result: Result;
}

const RenderedForm: React.FC<RenderedFormProps> = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
  loading,
  result
}) => {
  const { t } = useTranslation('home');
  return (
    <>
      {result && result.success ? (
        <Text>{t('contact.submit_success')}</Text>
      ) : (
        <>
          <Box mb={3} title={t('contact.opening.title')}>
            <Text>
              {t('contact.opening.text_1')}
              <br />
              {t('contact.opening.text_2')}
            </Text>
          </Box>
          <Box as="form" title="Contact form" onSubmit={handleSubmit}>
            <Box mb={3}>
              <Label htmlFor="name">{t('contact.name')}</Label>
              <Input
                id="name"
                className={errors.name && 'error'}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <Text variant="formErrorText">{t(`contact.validation.${errors.name}`)}</Text>
              )}
            </Box>
            <Box mb={3}>
              <Label htmlFor="email">{t('contact.email')}</Label>
              <Input
                id="email"
                type="email"
                className={errors.email && 'error'}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <Text variant="formErrorText">{t(`contact.validation.${errors.email}`)}</Text>
              )}
            </Box>
            <Box mb={3} sx={{ display: 'none' }}>
              <Label htmlFor="company">{t('contact.company')}</Label>
              <Input id="company" name="company" onChange={handleChange} onBlur={handleBlur} />
            </Box>
            <Box mb={3}>
              <Label htmlFor="message">{t('contact.message')}</Label>
              <Textarea
                id="message"
                className={errors.message && 'error'}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.message && errors.message && (
                <Text variant="formErrorText">{t(`contact.validation.${errors.message}`)}</Text>
              )}
            </Box>
            <Box mb={5}>
              <Label htmlFor="human_check">{t('contact.human_check')}</Label>
              <Input
                id="human_check"
                className={errors.human_check && 'error'}
                name="human_check"
                value={values.human_check}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.human_check && errors.human_check && (
                <Text variant="formErrorText">{t(`contact.validation.${errors.human_check}`)}</Text>
              )}
            </Box>
            {result && !result.success && (
              <Box mb={4}>
                <Text variant="formErrorText">{t('contact.submit_error')}</Text>
              </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                disabled={Object.keys(errors).length > 0 || loading}
                variant="secondary"
                type="submit"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {t('contact.submit')} {loading && <LoadingIcon width={30} height={30} mL />}
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

interface ContactFormProps {
  initialValues: {
    name: string;
    email: string;
    message: string;
    company: string;
    human_check: string;
  };
  validate: { [key: string]: (name: string) => string | null };
}

const ContactForm: React.FC<ContactFormProps> = ({ initialValues, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<Result>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value: newValue, type } = evt.target;
    const value = type === 'number' ? +newValue : newValue;

    setValues({
      ...values,
      [name]: value
    });

    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [name]: removedError, ...rest } = errors;
    const error = validate[name](value);

    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault();

    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );

    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length &&
      Object.values(formValidation.touched).length === Object.values(values).length &&
      Object.values(formValidation.touched).every((t) => t === true)
    ) {
      setLoading(true);

      axios
        .post<AxiosPromise>(`${secrets.BACKEND_URL}/send`, { ...values })
        .then((response: AxiosResponse) => {
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
    <RenderedForm
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
};

export default ContactForm;
