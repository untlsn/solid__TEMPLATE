import '$css';
import { MetaProvider } from 'solid-meta';
import type { Route } from '~/routes';
import DefaultHead from '~/components/DefaultHead';

function RoutesWrapper(props: { routes: Route[] }) {
  // eslint-disable-next-line solid/reactivity
  const Routes = useRoutes(props.routes);

  return (
    <div>
      <Routes />
    </div>
  );
}

function App(props: { routes: Route[], url?: string, tags?: any[] }) {
  return (
    <MetaProvider tags={props.tags || []}>
      <Router url={props.url}>
        <DefaultHead />
        <RoutesWrapper routes={props.routes} />
      </Router>
    </MetaProvider>
  );
}

export default App;
