import About from './components/pages/About'
import Home from './components/pages/Home'
import Test from './components/pages/Test'

type Route = {
    path: string;
    name: string;
    component: () => JSX.Element;
}

const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

export default routes
