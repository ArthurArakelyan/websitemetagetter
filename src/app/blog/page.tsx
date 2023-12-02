import { Metadata } from 'next';

import BlogCard from '@/components/pages/blog/BlogCard';

import blogs from '@/constants/blogs';
import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './Blog.module.scss';

const title = `Blog | ${mainTitle}`;
const description = 'In our blog section you can find articles on software engineering, web development, front-end development, website updates and more.';
const canonical = '/blog';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'website, meta, getter, blog, articles, updates, front-end, seo, development',
  alternates: {
    canonical: canonical,
  },
  openGraph: {
    ...defaultOpenGraph,
    title,
    description,
    url: canonical,
  },
};

const Blog = () => {
  return (
    <div className={styles['blog']}>
      <h1 className={styles['blog__title']}>
        Latest in the Blog
      </h1>

      <div className={styles['blog__content']}>
        <div className={styles['blog__cards']}>
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
