import { ILinkButtonProps } from './types';

import styles from './LinkButton.module.scss';

const LinkButton = ({ href, icon, name, alt, className = '' }: ILinkButtonProps) => {
  return (
    <a
      className={`${styles['link-button']} ${className}`}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <img
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className={styles['link-button__icon']}
      />

      <span className={styles['link-button__name']}>
        {name}
      </span>
    </a>
  );
};

export default LinkButton;
