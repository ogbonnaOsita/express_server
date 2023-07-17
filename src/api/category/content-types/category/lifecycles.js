module.exports = {
  beforeCreate(event) {
    if (event.params.data.title) {
      const title = event.params.data.title;
      const slug = title.replaceAll(" ", "-").toLowerCase();
      event.params.data.slug = slug;
    }
  },

  beforeUpdate(event) {
    if (event.params.data.title) {
      const title = event.params.data.title;
      const slug = title.replaceAll(" ", "-").toLowerCase();
      event.params.data.slug = slug;
    }
  },
};
