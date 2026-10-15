// One entry per licensed photo placed in /public/images.
export type ImageCredit = {
  file: string;
  title: string;
  photographer: string;
  source: string;
  licence: string;
  url: string;
};

export const imageCredits: ImageCredit[] = [];