import styles from './MetaTag.module.scss';

import { IMetaTagProps } from './types';

const MetaTag = ({ id, title, icon, content, url, code, color, image, iframe, video }: IMetaTagProps) => {
  const Icon = icon;

  return (
    <li id={id} className={styles['meta-tag']}>
      <div className={styles['meta-tag__header']}>
        <Icon className={styles['meta-tag__header-icon']} />

        <h3 className={styles['meta-tag__header-title']}>
          {title}
        </h3>
      </div>

      <div className={styles['meta-tag__content']}>
        {color && (
          <div
            aria-hidden
            style={{ backgroundColor: color }}
            className={styles['meta-tag__color']}
          />
        )}

        {code ? (
          <pre className={styles['meta-tag__content-code']}>
            {code}
          </pre>
        ) : (
          url ? (
            <a
              href={url}
              target="_blank"
              referrerPolicy="no-referrer"
              className={styles['meta-tag__content-text']}
            >
              {content || url}
            </a>
          ) : (
            <p className={styles['meta-tag__content-text']}>
              {content}
            </p>
          )
        )}
      </div>

      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className={styles['meta-tag__image']}
        />
      )}

      {iframe && (
        <iframe
          src={iframe.url}
          width={iframe.width || undefined}
          height={iframe.height || undefined}
          className={styles['meta-tag__iframe']}
        />
      )}

      {video && (
        <video
          className={styles['meta-tag__video']}
          width={video.width || undefined}
          height={video.height || undefined}
          controls
        >
          <source src={video.url} type={video.type || 'video/mp4'}/>

          Your browser does not support this video.
        </video>
      )}
    </li>
  );
};

export default MetaTag;
