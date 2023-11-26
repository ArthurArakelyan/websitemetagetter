'use client';

import { FocusEventHandler, forwardRef, useEffect, useRef, useState, WheelEventHandler } from 'react';

import styles from './Input.module.scss';

import { IInputProps } from './types';

const Input = forwardRef<HTMLInputElement, IInputProps>(({ error, placeholder, type = 'text', wrapperClassName = '', className = '', onFocus, onBlur, children, id, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isDivided, setIsDivided] = useState<boolean>(!!props.value);

  const handleInitializeRef = (newRef: HTMLInputElement | null) => {
    if (!newRef) {
      return;
    }

    // @ts-ignore
    inputRef.current = newRef;

    if (ref) {
      // @ts-ignore
      ref.current = newRef;
    }
  };

  const handleWrapperMouseDown = () => {
    setTimeout(() => {
      setIsFocused(true);
      setIsDivided(true);
    }, 0);
  };

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus?.(e);

    setIsFocused(true);
    setIsDivided(true);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur?.(e);

    setIsFocused(false);

    if (!props.value) {
      setIsDivided(false);
    }
  };

  const handleWheelCapture: WheelEventHandler<HTMLInputElement> = (e) => {
    if (isFocused) {
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    setIsDivided(!!props.value);
  }, [props.value]);

  return (
    <div
      className={`${styles['input-wrapper']} ${isFocused ? styles['input-wrapper--focus'] : ''} ${isDivided ? styles['input-wrapper--divided'] : ''} ${error ? styles['input-wrapper--error'] : ''} ${wrapperClassName}`}
      onMouseDown={handleWrapperMouseDown}
      onClick={handleWrapperClick}
    >
      <label htmlFor={id} className={styles['input__placeholder']}>
        <div aria-hidden className={styles['input__placeholder-background']} />

        {placeholder}
      </label>

      <input
        {...props}
        id={id}
        ref={handleInitializeRef}
        type={type}
        className={`${styles['input']} ${className}`}
        onWheelCapture={type === 'number' ? handleWheelCapture : undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {children}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
