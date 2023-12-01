import { mainTitle } from '@/constants/seo';

import { IFaq } from '@/types';

export const siteFaq: IFaq[] = [
  {
    title: `What is ${mainTitle}?`,
    description: `${mainTitle} is a tool which helps you to quickly and easily check webpage's meta tags. ${mainTitle} supports almost all meta tags and provides information about them.`,
  },
  {
    title: `Is ${mainTitle} free?`,
    description: `Yes, it is. ${mainTitle} is a <b>free</b> tool for public use.`,
  },
  {
    title: `Is there a ${mainTitle} desktop app?`,
    description: 'No, there is not. You can install <b>Progressive Web Application(PWA)</b> version of this website. Here is the guide which shows how you can do it in Google Chrome <a href="https://support.google.com/chrome/answer/9658361?hl=en" target="_blank">https://support.google.com/chrome/answer/9658361</a>',
  },
  {
    title: `Is there a ${mainTitle} mobile app?`,
    description: 'No, there is not. We are working on it. Now you can install <b>Progressive Web Application(PWA)</b> version of this website. Here is the guide which shows how you can do it in Google Chrome <a href="https://support.google.com/chrome/answer/9658361?hl=en" target="_blank">https://support.google.com/chrome/answer/9658361</a>',
  },
];

export const siteFaqScheme: IFaq[] = [
  {
    title: `What is ${mainTitle}?`,
    description: `${mainTitle} is a tool which helps you to quickly and easily check webpage's meta tags. ${mainTitle} supports almost all meta tags and provides information about them.`,
  },
  {
    title: `Is ${mainTitle} free?`,
    description: `Yes, it is. ${mainTitle} is a free tool for public use.`,
  },
  {
    title: `Is there a ${mainTitle} desktop app?`,
    description: 'No, there is not. You can install Progressive Web Application(PWA) version of this website. Here is the guide which shows how you can do it in Google Chrome',
  },
  {
    title: `Is there a ${mainTitle} mobile app?`,
    description: 'No, there is not. We are working on it. Now you can install Progressive Web Application(PWA) version of this website. Here is the guide which shows how you can do it in Google Chrome',
  },
];
