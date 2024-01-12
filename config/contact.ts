export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@karan_6864',
  site: 'joshwagenbach.com',
  calendly: 'https://calendly.com/maltewagenbach',
  links: {
    github: 'https://github.com/karanpratapsingh',
    linkedin: 'https://linkedin.com/in/maltewagenbach',
    googlescholar:
      'https://scholar.google.com/citations?user=8wIfeAsAAAAJ&hl=en',
    twitter: 'https://twitter.com/karan_6864',
    youtube: 'https://www.youtube.com/c/KaranPratapSingh',
    email: 'mailto:malte@joshwagenbach.com',
    buymeacoffee: 'https://www.buymeacoffee.com/maltewagenbach',
  },
};
