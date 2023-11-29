'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import ArrowRight from '@/components/UI/Icons/ArrowRight';

import removeHttp from '@/helpers/removeHttps';

import { urlRegexp } from '@/constants/validation';

import { IWebsiteInputProps } from '@/components/shared/WebsiteInput/types';

import styles from './WebsiteInput.module.scss';

const WebsiteInput = ({ initialUrl = '', className = '' }: IWebsiteInputProps) => {
  const router = useRouter();

  const [url, setUrl] = useState<string>(initialUrl);

  const handleChangeUrl: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!urlRegexp.test(url)) {
      return;
    }

    router.push(`/website/${removeHttp(url)}`);
  };

  return (
    <form
      className={`${styles['website-input']} ${className}`}
      onSubmit={handleSubmit}
    >
      <Input
        id="website-address"
        name="website-address"
        autoComplete="off"
        type="url"
        placeholder="Website Address"
        value={url}
        onChange={handleChangeUrl}
      />

      <Button
        type="submit"
        aria-label="Find website meta"
        className={styles['website-input__button']}
      >
        <ArrowRight className={styles['website-input__button-icon']} />
      </Button>
    </form>
  );
};

export default WebsiteInput;
