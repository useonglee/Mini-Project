import { Routes, Route, Link } from "react-router-dom";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager("./pages/*.tsx");

const routes = Object.keys(pages).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1];

  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export default function App() {
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ name, path, component: RouteComp }) => {
          return <Route key={name} path={path} element={<RouteComp />} />;
        })}
      </Routes>
    </>
  );
}
