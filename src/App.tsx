import '$css';
import type { Route } from '~/routes';

function RoutesWrapper(props: { routes: Route[] }) {
  // eslint-disable-next-line solid/reactivity
  const Routes = useRoutes(props.routes);

  return (
    <div>
      <Routes />
    </div>
  );
}

function App(props: { routes: Route[], url?: string }) {
  return (
    <Router url={props.url}>
      <RoutesWrapper routes={props.routes} />
    </Router>
  );
}

export default App;
