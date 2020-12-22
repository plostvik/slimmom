import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../routes';
import PublicRoute from '../PublicRoute/PublicRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import Loader from '../shared/Loader';
import Layout from '../Layout';

//style
import './App.scss';

class App extends Component {
  render() {
    const routesMap = routes.map(route => {
      return route.privated ? (
        <PrivateRoute key={route.path} {...route} />
      ) : (
        <PublicRoute key={route.path} {...route} />
      );
    });

    return (
<<<<<<< HEAD
      <Fragment>
        <Decoration isLoginPage={false}/>
=======
      <Layout>
>>>>>>> 7bc1d4aa87d6b2e391c458c0ba32e7d0cbc891b5
        <Suspense fallback={<Loader />}>
          <Switch>
            {routesMap}
            <Route component={lazy(() => import('../../pages/NotFound'))} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;