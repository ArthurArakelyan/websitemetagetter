export interface IFaq {
  title: string;
  description: string[];
  links?: IFAQLink[];
}

interface IFAQLink {
  name: string;
  alt: string;
  icon: string;
  link: string;
}
