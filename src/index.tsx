/* @refresh reload */
import { render } from 'solid-js/web';
import App from '~/App';
import { getLazyRoutes } from '~/routes';

const routes = getLazyRoutes();

render(() => (
  <App routes={routes} />
), document.getElementById('root') as HTMLElement);
