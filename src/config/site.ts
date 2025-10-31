type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Next.Js Blogging",
  description:
    "An Open source Technical Blog platform with Next.js 16 with shadcn/ui, prisma and markdown support.",
  url: "https://nextjs-blogging-cms.vercel.app/",
  ogImage: "https://nextjs-blogging-cms.vercel.app/og",
  links: {
    twitter: "https://twitter.com/petrando",
    github: "https://github.com/petrando",
  },
};