export interface IWebsiteMeta {
  title: string;
  description: string | null;
  keywords: string | null;
  themeColor: string | null;

  // Not Used
  author: string | null;
  generator: string | null;
  publisher: string | null;
  creator: string | null;

  og: IWebsiteOGMeta;
  twitter: IWebsiteTwitterMeta;
}

export interface IWebsiteOGMeta {
  title: string | null;
  description: string | null;
  url: string | null;
  siteName: string | null;

  // Not Used
  locale: string | null;

  type: string | null;

  image: {
    url: string | null;
    width: string | null;
    height: string | null;
    alt: string | null;
  };

  video: {
    url: string | null;
    width: string | null;
    height: string | null;
    type: string | null;
  };

  // Not Used
  audio: {
    url: string | null;
    type: string | null;
  };
}

export interface IWebsiteTwitterMeta {
  card: string | null;
  site: string | null;
  creator: string | null;
  title: string | null;
  description: string | null;

  image: {
    url: string | null;
    width: string | null;
    height: string | null;
    alt: string | null;
  };

  player: {
    url: string | null;
    width: string | null;
    height: string | null;
  };

  // Not Used
  app: {
    iphone: IWebsiteTwitterMetaApp;
    ipad: IWebsiteTwitterMetaApp;
    googleplay: IWebsiteTwitterMetaApp;
  };
}

export interface IWebsiteTwitterMetaApp {
  name: string | null;
  id: string | null;
  url: string | null;
}
