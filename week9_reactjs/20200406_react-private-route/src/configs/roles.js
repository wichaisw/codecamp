// import all pages in App
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import VIPFeature from '../components/pages/VIPfeature';
import AdminFeature from '../components/pages/AdminFeature';

const components = {
  home: {
    component: Home,
    url: '/'
  },
  about: {
    component: About,
    url: '/about'
  },
  vipFeature: {
    component: VIPFeature,
    url: '/vip'
  },
  adminFeature: {
    component: AdminFeature,
    url: '/admin'
  }
}

const configsRoute = {
  guest: {
      route: [
      components.home,
      components.about
      ],
      redirect: '/'
  },
  user: {
    route: [
      components.home,
      components.about,
      components.vipFeature
    ],
    redirect: '/vip'
  },
  admin: {
    route: [...Object.values(components)],
    // route: [...components],
    redirect: '/admin'
  }
}

export default configsRoute