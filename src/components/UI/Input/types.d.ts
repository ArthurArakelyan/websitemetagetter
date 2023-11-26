import { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: boolean | string | FieldError;
  wrapperClassName?: string;
  id: string;
}
