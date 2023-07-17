module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/paystack',
     handler: 'paystack.initializePayment',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
