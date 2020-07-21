import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  const { user } = useAuth();

  function shouldRedirect(): boolean {
    return (isPrivate && !user) || (!isPrivate && !!user);
  }

  return (
    <ReactDOMRoute
      {...props}
      render={({ location }) => {
        return shouldRedirect() ? (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        ) : (
          <Component />
        );
      }}
    />
  );
};

export default Route;
