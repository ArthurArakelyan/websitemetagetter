import blogs from '@/constants/blogs';
import { url } from '@/constants/seo';

import { ISitemap } from '@/types';

const getBlogs = async (): Promise<ISitemap[]> => {
  try {
    return blogs.map((blog) => {
      return {
        url: url + '/blog/' + blog.id,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error(error);

    return [];
  }
};

// TODO: add user queried websites and filter duplicates
const getWebsites = async (): Promise<ISitemap[]> => {
  try {
    return [];
  } catch (error) {
    console.error(error);

    return [];
  }
};

const Sitemap = async (): Promise<ISitemap[]> => {
  const blogs = await getBlogs();
  const websites = await getWebsites();

  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: url + '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url + '/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url + '/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url + '/terms-of-use',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url + '/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url + '/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogs,
    ...websites,
  ];
};

export default Sitemap;
