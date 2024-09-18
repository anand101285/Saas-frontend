import '@fontsource/chakra-petch';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, DashboardLayout, VerifyEmail } from 'views';
import './App.css';
import { siderClientRoutes } from './routing';
import { SiderRoutes } from './routing/types';

// redux
import { loadUser } from 'appRedux/actions/authAction';
import store from 'appRedux/store';
import { Provider } from 'react-redux';

// middleware
import { Alert } from 'components';
import RequireAuth from './utils/RequireAuth';
import LandingSaas from 'views/landing/LandingSaas';
// import { Landing } from 'views/landing/Landing';

/**
 * Main App
 *
 * @returns {React.FC} TODO Component
 */
const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  /**
   * Recusive Routing configuration
   *
   * @param {Array<SiderRoutes>} routes to be iterated
   * @returns {React.ReactNode} subRoutes
   */
  const developRoutes = (routes: Array<SiderRoutes>): React.ReactNode => {
    return routes.map((route, key) => {
      return route.index ? (
        <Route path={''} index={route.index} element={route.component} key={key} />
      ) : (
        <Route path={route.path} index={route.index} element={route.component} key={key} />
      );
    });
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Alert />
          <Routes>
            <Route path="verify-email/:tokenId" element={<VerifyEmail />} />

            <Route path="*" element={<AuthLayout />} />

            <Route
              path="user"
              element={
                <RequireAuth>
                  <DashboardLayout />
                </RequireAuth>
              }>
              {developRoutes(siderClientRoutes)}
            </Route>
            <Route path="/landing" element={<LandingSaas />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
