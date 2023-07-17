module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "shoolybrandt22@gmail.com",
          pass: "twoetibfmneldxiw",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "shoolybrandt22@gmail.com",
        defaultReplyTo: "shoolybrandt22@gmail.com",
      },
    },
  },
  // ...
});
