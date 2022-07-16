/* @refresh reload */
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web';
import App from '~/App';
import { getRoutes } from '~/routes';

const { routes, names } = getRoutes();

export function render(url: string, tags: any[]) {
  return renderToStringAsync(() => (
    <App routes={routes} url={url} tags={tags} />
  ));
}

export const hydration = generateHydrationScript();

export { names };
