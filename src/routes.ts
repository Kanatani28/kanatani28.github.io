import About from "./components/pages/About";
import Home from "./components/pages/Home";

type Route = {
  path: string;
  name: string;
  component: () => JSX.Element;
};

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes;
