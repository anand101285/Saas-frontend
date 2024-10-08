/* eslint-disable no-process-env */

interface IBranding {
  BRAND_NAME: string;
  BRAND_CONTACT_EMAIL: string;

  BRAND_TWITTER_LINK: string;
  BRAND_LINKEDIN_LINK: string;

  BRAND_LOGO_NAVBAR_WIDTH: number;
  BRAND_LOGO_NAVBAR_HEIGHT: number;
  BRAND_PRIVACY_POLICY: string;
}

const branding: IBranding = {
  BRAND_NAME: process.env.REACT_APP_BRAND_NAME as string,
  BRAND_CONTACT_EMAIL: process.env.REACT_APP_BRAND_CONTACT_EMAIL as string,
  BRAND_TWITTER_LINK: process.env.REACT_APP_BRAND_TWITTER_LINK as string,
  BRAND_LINKEDIN_LINK: process.env.REACT_APP_BRAND_LINKEDIN_LINK as string,
  BRAND_LOGO_NAVBAR_WIDTH: Number(process.env.REACT_APP_BRAND_LOGO_NAVBAR_WIDTH),
  BRAND_LOGO_NAVBAR_HEIGHT: Number(process.env.REACT_APP_BRAND_LOGO_NAVBAR_HEIGHT),
  BRAND_PRIVACY_POLICY: process.env.BRAND_PRIVAY_POLICY as string
};

export { branding };
