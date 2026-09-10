export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  ownerName: string;
  phone: string;
  email: string;
  social: {
    instagram: string;
    whatsapp: string;
    whatsappGroup: string;
  };
};

export type OpeningWindow = {
  dayLabel: string;
  hoursLabel: string;
};
