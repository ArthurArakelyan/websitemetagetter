import { IFaq, IHomeFaq } from '@/types';

const getFaqStructuredData = (faq: IFaq[] | IHomeFaq[]) => {
  try {
    return faq.map((question) => {
      return {
        '@type': 'Question',
        name: question.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: Array.isArray(question.description)
            ? question.description.join('<br><br>')
            : question.description,
        },
      };
    });
  } catch (error: any) {
    console.error(error);

    return [];
  }
};

export default getFaqStructuredData;
