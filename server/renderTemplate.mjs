export default function renderTemplate(template, appHtml, headTags) {
  return template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--head-html-->', headTags);
}
