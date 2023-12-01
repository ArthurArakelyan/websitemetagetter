import { IFaq } from '@/types';

const getFaqStructuredData = (faq: IFaq[]) => {
  try {
    return faq.map((question) => {
      return {
        '@type': 'Question',
        name: question.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.description,
        },
      };
    });
  } catch (error: any) {
    console.error(error);

    return [];
  }
};

export default getFaqStructuredData;
