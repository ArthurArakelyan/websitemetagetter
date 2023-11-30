// Styles
import styles from './InputError.module.scss';

// Types
import { IInputErrorProps } from './types';

const InputError = ({ children }: IInputErrorProps) => {
  return (
    <span
      role="alert"
      className={styles['input-error']}
    >
      {children}
    </span>
  );
};

export default InputError;
