# React Router v6

Install React Router v6. If you're managing
dependencies via npm:

```
$ npm install react-router@next react-router-dom@next

```

### Replacing `<Switch>` elements to `<Routes>`

React Router v6 introduces a `Routes` component that is kind of like `Switch`,
but a lot more powerful.

```js
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const MainRoutes: React.FC = (): JSX.Element => (
  /* Routes using react route config */
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="learn" element={<Learn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
```

### Nested Routes and Layouts(<Outlet />)

Up to this point we've talked about the new `<Routes>`, `<Route>`, and `<Outlet>` APIs which use React elements to declare your routes. I call this API "the JSX API" for routing with React Router.

```tsx
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const MainRoutes: React.FC = (): JSX.Element => (
  /* Routes using react route config */
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseDetails />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

import { Link, Outlet } from 'react-router-dom';

const Learn: React.FC = (): JSX.Element => (
  <div>
    <h1>Learn</h1>
    <h4>All courses are listed here</h4>
    <Link className="btn btn-success" to="/learn/courses">
      courses
    </Link>
    |<Link className="btn btn-primary" to="/learn/bundles">
      bundle
    </Link>
    <Outlet />
  </div>
);

export default Learn;
```

### Object Based Routes Using `useRoutes`

The `useRoutes` hook is a first-class API for routing that lets you declare and compose your routes using JavaScript objects instead of React elements. Continuing with the example above, let's see what it looks like with `useRoutes`.

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './redux/store/configureStore';
import MainRoutes from './routes';

const store = configureStore();
const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <Router>
      <MainRoutes />
    </Router>
  </Provider>
);

export default App;


import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';

const MainRoutes: React.FC = (): JSX.Element => {
  const elementRoutes: any = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/myapps',
      element: <Navigate replace to="/learn" />,
    },
    {
      path: '/learn',
      element: <Learn />,
      children: [
        {
          path: 'courses',
          element: <Courses />,
          children: [
            {
              path: ':courseId',
              element: <CourseDetails />,
            },
          ],
        },
        {
          path: 'bundles',
          element: <Bundles />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);
  return elementRoutes;
};

export default MainRoutes;

```



