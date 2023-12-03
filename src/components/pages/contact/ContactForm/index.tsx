'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import InputError from '@/components/UI/InputError';
import Textarea from '@/components/UI/Textarea';

import ContactService from '@/services/ContactService';

import { emailMessage, maxLength, maxLengthMessages, requiredMessage } from '@/constants/validation';
import { emailRegexp } from '@/constants/regexp';
import { baseErrorMessage } from '@/constants/messages';

import styles from './ContactForm.module.scss';

import { IContactForm, IContactResponseData } from './types';

const ContactForm = () => {
  const { handleSubmit, control, reset } = useForm<IContactForm>({
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: IContactForm) => {
    try {
      setSuccess(false);
      setLoading(true);
      setError(null);

      const response = await ContactService.sendContactMessage<IContactResponseData, IContactForm>(data);

      if (!response?.success) {
        throw new Error(response?.message || baseErrorMessage);
      }

      setSuccess(true);

      reset();
    } catch (error: any) {
      setError(error?.message || baseErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles['contact__form']}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className={styles['contact__form-fields-row']}>
        <Controller
          control={control}
          name="email"
          rules={{
            maxLength: {
              value: maxLength.long,
              message: maxLengthMessages.long,
            },
            pattern: {
              value: emailRegexp,
              message: emailMessage,
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <Input
                id="email"
                autoComplete="email"
                type="email"
                placeholder="Email"
                aria-label="Your email"
                error={fieldState.error}
                {...field}
              >
                {fieldState.error && (
                  <InputError>
                    {fieldState.error.message}
                  </InputError>
                )}
              </Input>
            );
          }}
        />

        <Controller
          control={control}
          name="name"
          rules={{
            maxLength: {
              value: maxLength.short,
              message: maxLengthMessages.short,
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <Input
                id="name"
                autoComplete="name"
                type="text"
                placeholder="Name"
                aria-label="Your name"
                error={fieldState.error}
                {...field}
              >
                {fieldState.error && (
                  <InputError>
                    {fieldState.error.message}
                  </InputError>
                )}
              </Input>
            );
          }}
        />
      </div>

      <div className={styles['contact__form-fields-row']}>
        <Controller
          name="message"
          control={control}
          rules={{
            required: requiredMessage,
            maxLength: {
              value: maxLength.textarea,
              message: maxLengthMessages.textarea,
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <Textarea
                id="message"
                placeholder="Message*"
                error={fieldState.error}
                {...field}
              >
                {fieldState.error && (
                  <InputError>
                    {fieldState.error.message}
                  </InputError>
                )}
              </Textarea>
            );
          }}
        />
      </div>

      <div className={styles['contact__form-submit-wrapper']}>
        <Button
          type="submit"
          loading={loading}
        >
          Send Message
        </Button>

        {success && (
          <p className={`${styles['contact__form-message']} ${styles['contact__form-message--success']}`}>
            Thank you for your message. If you sent your email we will answer you within 48 hours
          </p>
        )}

        {typeof error === 'string' && (
          <p className={`${styles['contact__form-message']} ${styles['contact__form-message--error']}`}>
            {error}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
