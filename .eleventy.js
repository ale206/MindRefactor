module.exports = function (eleventyConfig) {

  // ─── Passthrough: existing landing page assets ──────────────────────────
  // NOTE: index.html is intentionally NOT in passthrough — Eleventy processes it
  //       as a Nunjucks template so the url filter can inject the correct base path.
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/legal");
  eleventyConfig.addPassthroughCopy("src/auth");
  eleventyConfig.addPassthroughCopy("src/download");
  eleventyConfig.addPassthroughCopy("src/css");

  // ─── Collections (blog posts) ──────────────────────────────────────────────
  eleventyConfig.addCollection("postsEn", (api) =>
    api.getFilteredByGlob("src/posts/en/**/*.md").sort((a, b) => b.date - a.date)
  );


  // ─── Filters ────────────────────────────────────────────────────────────
  // Human-readable date:  "22 April 2026"
  eleventyConfig.addFilter("readableDate", (dateObj, locale = "en-GB") => {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  // ISO date string for <time datetime="…">
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toISOString().slice(0, 10);
  });

  // Exclude a URL and return at most `limit` items — used for sidebars
  eleventyConfig.addFilter("excludeAndLimit", (posts, excludeUrl, limit = 5) => {
    return posts.filter((p) => p.url !== excludeUrl).slice(0, limit);
  });

  // Filter posts by a given tag value
  eleventyConfig.addFilter("filterByTag", (posts, tag) => {
    return posts.filter((p) => (p.data.postTags || []).includes(tag));
  });

  // ─── Tag list collections (unique tags per language, sorted A→Z) ────────
  const buildTagList = (posts) => {
    const counts = {};
    posts.forEach((p) => {
      (p.data.postTags || []).forEach((t) => { counts[t] = (counts[t] || 0) + 1; });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => ({ tag, count }));
  };

  // ─── Tag list collections ────────────────────────────────────────────────
  eleventyConfig.addCollection("tagListEn", (api) =>
    buildTagList(api.getFilteredByGlob("src/posts/en/**/*.md"))
  );

  // ─── Eleventy config ────────────────────────────────────────────────────
  return {
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // ⚠️  Set to "/MindRefactor/" for GitHub Pages without a custom domain
    pathPrefix: "/MindRefactor/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
  };
};

