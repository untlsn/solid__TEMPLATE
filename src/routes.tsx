function getPath(path: string) {
  return path
    .match(/\.\/pages\/(.*)\.tsx$/)![1]
    .replace(/index/g, '')
    .replace(/\[.+]/g, (data) => `:${data.slice(1, -1)}`);
}

export interface Route { path: string, component: any }

export function getLazyRoutes(): Route[] {
  const pages = import.meta.glob('./pages/**') as Record<string, () => Promise<{ default: any }>>;

  return Object.keys(pages).map((path) => ({
    path: `/${getPath(path)}`,
    component: lazy(pages[path]),
  }));
}

export function getRoutes() {
  const pages = import.meta.globEager('./pages/**') as Record<string, { default: any }>;
  const names = Object.keys(pages);

  return {
    names,
    routes: names.map((path) => {
      const Component = pages[path].default;

      return {
        path: getPath(path),
        component: () => (
          <Suspense fallback={<>Loading...</>}>
            <Component />
          </Suspense>
        ),
      };
    }) as Route[],
  };
}
