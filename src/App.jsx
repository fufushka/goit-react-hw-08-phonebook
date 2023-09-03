import Layout from 'components/Layout/Layout';
// import { HomePage } from './pages/HomePage/homePage';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Store/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage/homePage'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/register" component={<HomePage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<Registration />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
      </Route>
    </Routes>
  );
};
