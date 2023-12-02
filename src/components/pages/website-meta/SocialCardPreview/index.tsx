import WebIcon from '@/components/UI/Icons/WebIcon';

import checkString from '@/helpers/checkString';

import styles from './SocialCardPreview.module.scss';

import { ISocialCardPreviewProps } from './types';

const SocialCardPreview = ({ website, websiteUrl }: ISocialCardPreviewProps) => {
  const url = checkString(website.og.url) ? website.og.url : websiteUrl;

  return (
    <section id="social-card" className={styles['social-card-preview']}>
      <h2 className={styles['social-card-preview__title']}>
        Social Card Preview
      </h2>

      <a
        href={url}
        target="_blank"
        referrerPolicy="no-referrer"
        className={styles['social-card']}
      >
        {checkString(website.og.image.url) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={website.og.image.url}
            alt={website.og.image.alt || website.og.title || website.title || undefined}
            width={website.og.image.width || undefined}
            height={website.og.image.height || undefined}
            className={styles['social-card__image']}
          />
        ) : (
          <div aria-hidden className={styles['social-card__empty-image']}>
            <WebIcon className={styles['social-card__empty-image-icon']} />
          </div>
        )}

        <div className={styles['social-card__content']}>
          <h3 className={styles['social-card__content-title']}>
            {website.og.title || website.title}
          </h3>

          {(checkString(website.og.description) || checkString(website.description)) && (
            <p className={styles['social-card__content-description']}>
              {website.og.description || website.description}
            </p>
          )}

          <p className={styles['social-card__content-url']}>
            {url}
          </p>
        </div>
      </a>
    </section>
  );
};

export default SocialCardPreview;
