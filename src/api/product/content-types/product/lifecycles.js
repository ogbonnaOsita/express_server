module.exports = {
  beforeCreate(event) {
    if (event.params.data.price) {
      const { price = "", discount = "" } = event.params.data;
      if (!event.params.data.discount) {
        event.params.data.newPrice = event.params.data.price;
      }
      if (event.params.data.discount < 1) {
        event.params.data.newPrice = event.params.data.price;
      }
      event.params.data.newPrice = price * (1 - discount / 100);
    }
    if (event.params.data.title) {
      const title = event.params.data.title;
      const slug = title.replaceAll(" ", "-").toLowerCase();
      event.params.data.slug = slug;
    }
  },

  beforeUpdate(event) {
    if (event.params.data.price) {
      const { price = "", discount = "" } = event.params.data;
      if (!event.params.data.discount) {
        event.params.data.newPrice = event.params.data.price;
      }
      if (event.params.data.discount < 1) {
        event.params.data.newPrice = event.params.data.price;
      }
      event.params.data.newPrice = price * (1 - discount / 100);
    }
    if (event.params.data.title) {
      const title = event.params.data.title;
      const slug = title.replaceAll(" ", "-").toLowerCase();
      event.params.data.slug = slug;
    }
  },
};
