import { Metadata } from 'next';

import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './TermsOfUse.module.scss';

const title = `Terms of Use | ${mainTitle}`;
const description = `${mainTitle}'s Terms of Use`;
const canonical = '/terms-of-use';

export const metadata: Metadata = {
  title,
  description,
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

const TermsOfUse = () => {
  const siteName = mainTitle;

  return (
    <div className={styles['terms-of-use']}>
      <div className={styles['terms-of-use__header']}>
        <h1 className={styles['terms-of-use__header-title']}>
          {siteName} Terms of Service
        </h1>
      </div>

      <div className={styles['terms-of-use__content']}>
        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Welcome to {siteName}
          </h2>

          <p className={styles['terms-of-use__text']}>
            Thanks for using our products and services (&#34;Services&#34;). By using our Services, you are agreeing to these terms. Please read them carefully. IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT USE THE SERVICES.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Using our Services
          </h2>

          <p className={styles['terms-of-use__text']}>
            You must follow any policies made available to you within the Services.
            <br/>
            <br/>
            Don&apos;t misuse our Services. For example, don&apos;t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
            <br/>
            <br/>
            Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don&apos;t remove, obscure, or alter any legal notices displayed in or along with our Services.
            <br/>
            <br/>
            In connection with your use of the Services, we may send you service announcements, administrative messages, and other information. You may opt out of some of those communications.
            <br/>
            <br/>
            Most of our Services are available on mobile devices. Do not use such Services in a way that distracts you and prevents you from obeying traffic or safety laws.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Privacy and Copyright Protection
          </h2>

          <p className={styles['terms-of-use__text']}>
            {siteName}&apos;s Privacy Policy explains how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that {siteName} can use such data in accordance with our privacy policies.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Your Content in Our Services
          </h2>

          <p className={styles['terms-of-use__text']}>
            Some of our Services allow you to create, upload, submit, save, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.
            <br/>
            <br/>
            You can find more information about how {siteName} uses and stores content in the Privacy Policy or additional terms for particular Services. If you submit feedback or suggestions about our Services, we may use your feedback or suggestions without obligation to you.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            About Software in Our Services
          </h2>

          <p className={styles['terms-of-use__text']}>
            When a Service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available. Some Services may let you adjust your automatic update settings.
            <br/>
            <br/>
            {siteName} gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you by {siteName} as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by {siteName}, in the manner permitted by these terms. You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Modifying and Terminating Our Services
          </h2>

          <p className={styles['terms-of-use__text']}>
            We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We&apos;ll post notice of modifications to these terms on this page. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of the Service.
            <br/>
            <br/>
            If there is a conflict between these terms and the additional terms, the additional terms will control for that conflict.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Our Warranties and Disclaimers
          </h2>

          <p className={styles['terms-of-use__text']}>
            We provide our Services using a commercially reasonable level of skill and care and we hope that you will enjoy using them. But there are certain things that we don&apos;t promise about our Services.
            <br/>
            <br/>
            OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER {siteName.toUpperCase()} NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES.
            <br/>
            <br/>
            SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES, LIKE THE IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE EXCLUDE ALL WARRANTIES.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Limits on Liability
          </h2>

          <p className={styles['terms-of-use__text']}>
            We work hard to provide the best Products we can and to specify clear guidelines for everyone who uses them. However, THE SERVICE IS PROVIDED &#34;AS IS&#34;.
            <br/>
            <br/>
            WE CANNOT PREDICT WHEN ISSUES MIGHT ARISE WITH OUR SERVICES. ACCORDINGLY, OUR LIABILITY SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AND UNDER NO CIRCUMSTANCE WILL WE BE LIABLE TO YOU FOR ANY LOST PROFITS, REVENUES, INFORMATION, OR DATA, OR CONSEQUENTIAL, SPECIAL, INDIRECT, EXEMPLARY, PUNITIVE, OR INCIDENTAL DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS OR THE {siteName.toUpperCase()} PRODUCTS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOUR USE AND/OR PURCHASE OF SERVICE ARE ALL AT YOUR SOLE RISK.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            Business Uses of Our Services
          </h2>

          <p className={styles['terms-of-use__text']}>
            If you are using our Services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify {siteName} and its affiliates, officers, agents, and employees from any claim, suit or action arising from or related to the use of the Services or violation of these terms, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys&apos; fees.
          </p>
        </div>

        <div className={styles['terms-of-use__section']}>
          <h2 className={styles['terms-of-use__subtitle']}>
            About These Terms
          </h2>

          <p className={styles['terms-of-use__text']}>
            These terms control the relationship between {siteName} and you. They do not create any third party beneficiary rights. If you do not comply with these terms, and we don&apos;t take action right away, this doesn&apos;t mean that we are giving up any rights that we may have (such as taking action in the future). If it turns out that a particular term is not enforceable, this will not affect any other terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
