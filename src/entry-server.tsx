/* @refresh reload */
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web';
import App from '~/App';
import { getRoutes } from '~/routes';

const { routes, names } = getRoutes();

export function render(url: string) {
  return renderToStringAsync(() => (
    <App routes={routes} url={url} />
  ));
}

export const hydration = generateHydrationScript();

export { names };
