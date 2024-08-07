import { Metadata } from 'next';

import { defaultOpenGraph, mainTitle, url } from '@/constants/seo';

import styles from './PrivacyPolicy.module.scss';

const title = `Privacy Policy | ${mainTitle}`;
const description = `${mainTitle}'s Privacy Policy`;
const canonical = '/privacy-policy';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'website, meta, getter, privacy, policy',
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

const PrivacyPolicy = () => {
  const siteName = mainTitle;

  return (
    <div className={styles['privacy-policy']}>
      <div className={styles['privacy-policy__header']}>
        <h1 className={styles['privacy-policy__header-title']}>
          Privacy Policy
        </h1>
      </div>

      <div className={styles['privacy-policy__content']}>
        <p className={styles['privacy-policy__text']}>
          This Privacy Policy document contains types of information that is collected and recorded by {siteName} and how we use it.
          <br/>
          <br/>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          <br/>
          <br/>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in {siteName}. This policy is not applicable to any information collected offline or via channels other than this website.
        </p>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Consent
          </h2>

          <p className={styles['privacy-policy__text']}>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Information we collect
          </h2>

          <p className={styles['privacy-policy__text']}>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            <br/>
            <br/>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            <br/>
            <br/>
            When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            How we use your information
          </h2>

          <div className={styles['privacy-policy__text']}>
            We use the information we collect in various ways, including to:
            <br/>
            <br/>

            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Log Files
          </h2>

          <p className={styles['privacy-policy__text']}>
            {siteName} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Cookies and Web Beacons
          </h2>

          <p className={styles['privacy-policy__text']}>
            Like any other website, {siteName} uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Google DoubleClick DART Cookie
          </h2>

          <p className={styles['privacy-policy__text']}>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to {url + '/'} and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Advertising Partners Privacy Policies
          </h2>

          <p className={styles['privacy-policy__text']}>
            You may consult this list to find the Privacy Policy for each of the advertising partners of {siteName}.
            <br/>
            <br/>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on {siteName}, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            <br/>
            <br/>
            Note that {siteName} has no access to or control over these cookies that are used by third-party advertisers.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Third Party Privacy Policies
          </h2>

          <p className={styles['privacy-policy__text']}>
            {siteName}’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            <br/>
            <br/>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </h2>

          <p className={styles['privacy-policy__text']}>
            Under the CCPA, among other rights, California consumers have the right to:
            <br/>
            <br/>
            Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
            <br/>
            <br/>
            Request that a business deletes any personal data about the consumer that a business has collected.
            <br/>
            <br/>
            Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.
            <br/>
            <br/>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            General Data Protection Regulation (GDPR)
          </h2>

          <div className={styles['privacy-policy__text']}>
            We are a Data Controller of your information.
            <br/>
            <br/>
            {siteName} legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
            <br/>
            <br/>

            <ul>
              <li>{siteName} needs to perform a contract with you</li>
              <li>You have given {siteName} permission to do so</li>
              <li>Processing your personal information is in {siteName} legitimate interests</li>
              <li>{siteName} needs to comply with the law</li>
              <li>{siteName} will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</li>
            </ul>

            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
            <br/>
            <br/>
            In certain circumstances, you have the following data protection rights:

            <br/>
            <br/>

            <ul>
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </div>
        </div>

        <div className={styles['privacy-policy__section']}>
          <h2 className={styles['privacy-policy__subtitle']}>
            Children’s Information
          </h2>

          <p className={styles['privacy-policy__text']}>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            <br/>
            <br/>
            {siteName} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
