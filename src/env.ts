const env = {
  jwtToken: {
    AUTH_SECRET: process.env.AUTH_SECRET || "",
  },
  github: {
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID || "",
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET || "",
  },
  google: {
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID || "",
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET || "",
  },
  twitter: {
    AUTH_TWITTER_ID: process.env.AUTH_TWITTER_ID || "",
    AUTH_TWITTER_SECRET: process.env.AUTH_TWITTER_SECRET || "",
  },
};

export default env;
