import { RefObject, TextareaHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  error?: boolean | string | FieldError;
  wrapperClassName?: string;
  refTextarea?: RefObject<HTMLTextAreaElement>;
}
