module.exports = {
  routes: [
    {
      method: "POST",
      path: "/verify",
      handler: "verify.verifyPayment",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
