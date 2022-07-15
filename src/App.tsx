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

function App(props: { routes: Route[] }) {
  return (
    <Router>
      <RoutesWrapper routes={props.routes} />
    </Router>
  );
}

export default App;
