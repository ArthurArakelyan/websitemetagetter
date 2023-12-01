import Link from 'next/link';

import { getBlogDate } from '@/helpers/getBlogDate';

import styles from './BlogCard.module.scss';

import { IBlogCardProps } from './types';

const BlogCard = ({ blog }: IBlogCardProps) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className={styles['blog-card']}
    >
      <div className={styles['blog-card__image-wrapper']}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={blog.cardImage}
          alt={blog.imageAlt}
          width={466}
          height={240}
          className={styles['blog-card__image']}
        />
      </div>

      <div className={styles['blog-card__info']}>
        <h2 className={styles['blog-card__info-title']}>
          {blog.title}
        </h2>

        <p className={styles['blog-card__info-description']}>
          {blog.description}
        </p>

        <div className={styles['blog-card__info-footer']}>
          <span className={styles['blog-card__info-footer-date']}>
            {getBlogDate(blog.date)}
          </span>

          <span className={styles['blog-card__info-footer-read']}>
            Read
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
