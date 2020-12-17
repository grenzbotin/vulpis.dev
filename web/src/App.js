import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'theme-ui';
import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MetaTags from './components/MetaTags';
import { useSticky } from './helpers';
import theme from './components/assets/themes';
import Loading from './components/elements/Loading';
import './i18n';

const Home = lazy(() => import('./containers/Home'));
const Disclosure = lazy(() => import('./containers/Disclosure'));
const Privacy = lazy(() => import('./containers/Privacy'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { isSticky, element } = useSticky();

  return (
    <HelmetProvider>
      <Router>
        <MetaTags />
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loading />}>
            <Navbar sticky={isSticky} />
            <Switch>
              <Route exact path="/disclosure"><Disclosure /></Route>
              <Route exact path="/:lng/disclosure"><Disclosure /></Route>
              <Route exact path="/privacy"><Privacy /></Route>
              <Route exact path="/:lng/privacy"><Privacy /></Route>
              <Route path="/" render={(props) => <Home {...props} headerElement={element} />} />
            </Switch>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
