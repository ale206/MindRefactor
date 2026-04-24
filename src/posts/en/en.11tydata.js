module.exports = {
  layout: "article.njk",
  lang: "en",
  eleventyComputed: {
    // Produces: /en/my-slug/
    permalink: (data) => `/en/${data.slug}/`
  }
};

