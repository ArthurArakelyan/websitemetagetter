'use client';

import { MouseEventHandler, useState } from 'react';

import Loader from '@/components/UI/Loader';

import styles from './Button.module.scss';

import { IButtonProps } from './types';
import { IRipple } from '@/types';

const Button = ({ loading = false, children, className = '', onClick, disabled, ...props }: IButtonProps) => {
  const [ripples, setRipples] = useState<IRipple[]>([]);

  const isDisabled = disabled || loading;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e);
    }

    const id = Math.random().toString();
    const size = e.currentTarget.clientWidth;
    const rect = e.currentTarget.getBoundingClientRect();

    setRipples((prevState) => {
      return [...prevState, {
        id,
        size,
        top: e.clientY - rect.top - 50 + 'px',
        left: e.clientX - rect.left - 50 + 'px',
      }];
    });

    setTimeout(() => {
      setRipples((prevState) => {
        return prevState.filter((ripple) => ripple.id !== id);
      });
    }, 800);
  }

  const ripplesContent = (
    ripples.map((ripple) => {
      return (
        <div
          key={ripple.id}
          className={styles['ripple']}
          style={{
            left: ripple.left,
            top: ripple.top,
          }}
        />
      );
    })
  );

  return (
    <button
      className={`${styles['button']} ${loading ? styles['button--loading'] : ''} ${className}`}
      onClick={handleClick}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      {...props}
    >
      <div className={styles['button__content']}>
        {children}
        {ripplesContent}
      </div>

      {loading && (
        <Loader
          size="small"
          className={styles['button__loader']}
        />
      )}
    </button>
  );
};

export default Button;
