import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { getBlogStructuredDate } from '@/helpers/getBlogDate';

import blogs from '@/constants/blogs';
import { authorObject, defaultOpenGraph, mainTitle, organizationObject, url } from '@/constants/seo';

import styles from './Blog.module.scss';

import { IBlog } from '@/types';
import { IBlogProps } from './types';

const getBlog = async (id: string): Promise<IBlog> => {
  try {
    const blog = blogs.find((blog) => blog.id === id);

    if (!blog) {
      return notFound();
    }

    return blog;
  } catch (error) {
    console.error(error);

    return notFound();
  }
};

export async function generateStaticParams() {
  return blogs.map((blog) => {
    return {
      id: blog.id,
    };
  });
}

export async function generateMetadata(
  { params }: IBlogProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const blog = await getBlog(params.id);

  const title = `${blog.title} | ${mainTitle}`;
  const description = blog.description;
  const canonical = `/blog/${blog.id}`;
  const ogImage = `${url}${blog.ogImage}`;

  return {
    title,
    description,
    keywords: blog.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: canonical,
      type: 'article',
      images: {
        ...defaultOpenGraph.images,
        url: ogImage,
        alt: blog.imageAlt,
      },
    },
  };
}

const Blog = async ({ params: { id } }: IBlogProps) => {
  const blog = await getBlog(id);

  const blogUrl = `${url}/blog/${blog.id}`;
  const ogImage = `${url}${blog.ogImage}`;

  return (
    <article className={styles['blog']}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={blog.image}
        alt={blog.imageAlt}
        width={806}
        height={403}
        className={styles['blog__image']}
      />

      <h1 className={styles['blog__title']}>
        {blog.title}
      </h1>

      <div
        className={styles['blog__content']}
        dangerouslySetInnerHTML={{ __html: blog.blog }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': blog.title,
            'description': blog.description,
            'image': ogImage,
            'genre': blog.genre,
            'keywords': blog.keywords,
            'author': authorObject,
            'publisher': organizationObject,
            'dateCreated': getBlogStructuredDate(blog.date),
            'datePublished': getBlogStructuredDate(blog.date),
            'dateModified': getBlogStructuredDate(blog.dateUpdated),
            'url': blogUrl,
          }),
        }}
      />
    </article>
  );
};

export default Blog;
