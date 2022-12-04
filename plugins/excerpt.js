const markdown = require('markdown-it');

module.exports = function excerpt(item) {
  const separator = '<!--excerpt-->';
  const excerpt = item.data?.page?.excerpt;

  // If it has an explicit excerpt (see setFrontMatterParsingOptions),
  // use it.
  if (excerpt) {
    return markdown({ html: true }).render(excerpt);
  }
}
