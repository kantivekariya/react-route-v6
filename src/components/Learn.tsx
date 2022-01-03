import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Learn: React.FC = (): JSX.Element => (
  <div>
    <h1>Learn</h1>
    <h4>All courses are listed here</h4>
    <Link className="btn btn-success" to="/learn/courses">
      courses
    </Link>
    |
    <Link className="btn btn-primary" to="/learn/bundles">
      bundle
    </Link>
    <Outlet />
  </div>
);

export default Learn;
