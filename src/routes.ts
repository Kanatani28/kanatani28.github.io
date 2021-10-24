import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

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
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  }
];

export default routes;
