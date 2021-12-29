import React from 'react';
import { RouteProps } from 'react-router';
import { Route, Navigate } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  component: React.FC;
  redirectPath: string;
  isAuthenticated: boolean;
}

export const PrivateRoute = ({
  component: Component,
  redirectPath,
  isAuthenticated,
  ...props
}: PrivateRouteProps) => {
  if (isAuthenticated) {
    return <Route {...props} element={<Component />} />;
  }
  return <Navigate to={redirectPath} />;
};
