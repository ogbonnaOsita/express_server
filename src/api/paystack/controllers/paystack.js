const paystack = require("paystack")(
  "sk_test_ead0e323bfcc7fea095022a55068811f176d759e"
);
const expect = require("chai").expect;

("use strict");

/**
 * A set of functions called "actions" for `paystack`
 */

module.exports = () => ({
  async initializePayment(ctx) {
    const { values } = ctx.request.body;
    let totalAmount = 0;
    const email = values[1].email;
    const metadata = {
      products: values[0],
      shipping_info: values[1],
    };

    const items = await Promise.all(
      values[0].map(async (product) => {
        const item = await strapi.entityService.findOne(
          "api::product.product",
          product.id
        );

        return {
          unit_amount: item.newPrice * 100,
          quantity: product.quantity,
        };
      })
    );

    try {
      items.map((item) => {
        totalAmount += item.quantity * item.unit_amount;
      });

      // return {amount: totalAmount, email: values[1].email};
      const paystackSession = await paystack.transaction
        .initialize({
          email: email,
          amount: totalAmount,
          metadata: metadata,
          callback_url: "http://127.0.0.1:5000/verify",
        })
        .then(function (body) {
          expect(body).to.have.property("data");
          expect(body.data).to.have.property("authorization_url");
          expect(body.data).to.have.property("access_code");
          expect(body.data).to.have.property("reference");
          reference = body.data.reference;
          return body.data;
        })
        .catch(function (error) {
          return error;
        });
      return { paystack: paystackSession };
    } catch (err) {
      return err;
    }
  },
});
