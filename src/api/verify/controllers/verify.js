const paystack = require("paystack")(
  "sk_test_ead0e323bfcc7fea095022a55068811f176d759e"
);
const expect = require("chai").expect;

("use strict");

/**
 * A set of functions called "actions" for `verify`
 */

module.exports = () => ({
  async verifyPayment(ctx) {
    const { reference } = ctx.request.body;

    try {
      const paystackSession = await paystack.transaction
        .verify(reference)
        .then(async (body) => {
          expect(body).to.have.property("data");
          expect(body.data).to.be.an("object");

          await strapi.entityService.create("api::order.order", {
            data: {
              products: body.data.metadata.products,
              paymentId: body.data.id,
              shipping: body.data.metadata.shipping_info,
              amount: body.data.amount / 100,
              buyerEmail: ctx.state.user.email,
            },
          });

          // body.data.metadata.products.map(async (product) => {
          //   await strapi.entityService.create("api::order.order", {
          //     data: {
          //       products: body.data.metadata.products,
          //       paymentId: body.data.id,
          //       shipping: body.data.metadata.shipping_info,
          //       amount: parseFloat(product.price) * parseInt(product.quantity),
          //       buyerEmail: ctx.state.user.email,
          //     },
          //   });
          // });

          return body.data;
        })
        .catch(function (error) {
          return error;
        });

      return {
        transactionStatus: paystackSession.status,
        body: paystackSession,
      };
    } catch (err) {
      return err;
    }
  },
});
