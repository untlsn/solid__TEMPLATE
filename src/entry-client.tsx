/* @refresh reload */
import { render, hydrate } from 'solid-js/web';
import App from '~/App';
import { getLazyRoutes } from '~/routes';

const routes = getLazyRoutes();

const renderFn = import.meta.env.SSR ? hydrate : render;

renderFn(() => (
  <App routes={routes} />
), document.getElementById('root') as HTMLElement);
