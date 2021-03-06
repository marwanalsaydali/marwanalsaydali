// .env variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "MarwanAlsaydali",
    name: "Marwan Alsaydali",
    jobtitle: "Web Developer",
    bio: "Father, Husband, freelance web developer and photographer that loves to tell stories through beautiful websites and images.",
    links: {
      twitter: "https://twitter.com/alsaydali",
      instagram: "https://instagram.com/alsaydali",
      github: "https://github.com/marwanalsaydali",
      linkedin: "https://www.linkedin.com/in/marwanalsaydali/",
      email: "marwanalsaydali@gmail.com",
      website: "https://marwanalsaydali.com",
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
