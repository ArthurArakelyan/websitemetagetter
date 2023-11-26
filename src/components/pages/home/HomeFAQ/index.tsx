import LinkButton from '@/components/UI/LinkButton';

import homeFaq from '@/constants/homeFaq';

import styles from './HomeFAQ.module.scss';

const HomeFAQ = () => {
  return (
    <section id="faq" className={styles['home-faq']}>
      {homeFaq.map((question, index) => {
        return (
          <div
            key={`faq-${index}`}
            className={styles['home-faq__question']}
          >
            <h3 className={styles['home-faq__question-title']}>
              {question.title}
            </h3>

            <div className={styles['home-faq__question-descriptions']}>
              {question.description.map((description, descriptionIndex) => {
                return (
                  <p
                    key={`faq-${index}-${descriptionIndex}`}
                    className={styles['home-faq__question-description']}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                );
              })}
            </div>

            {!!question.links && (
              <div className={styles['home-faq__question-links']}>
                {question.links.map((link) => {
                  return (
                    <LinkButton
                      key={link.link}
                      href={link.link}
                      icon={link.icon}
                      name={link.name}
                      alt={link.alt}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HomeFAQ;
