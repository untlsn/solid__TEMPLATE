import { renderTags } from 'solid-meta';

export default function renderTemplate(template, appHtml, headTags, hydration) {
  const tags = renderTags(headTags);
  return template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--head-html-->', `${tags}${hydration}`);
}
