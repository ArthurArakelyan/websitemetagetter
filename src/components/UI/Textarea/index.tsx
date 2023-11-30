import { forwardRef } from 'react';

// Styles
import styles from './Textarea.module.scss';

// Types
import { ITextareaProps } from './types';

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(({ error, placeholder, wrapperClassName = '', className = '', children, ...props }, ref) => {
  return (
    <div className={`${styles['textarea-wrapper']} ${error ? styles['textarea-wrapper--error'] : ''} ${wrapperClassName}`}>
      <textarea
        {...props}
        ref={ref}
        placeholder={placeholder}
        className={`${styles['textarea']} ${className}`}
      />

      {children}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
