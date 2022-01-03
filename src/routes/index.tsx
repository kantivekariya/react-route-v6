/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import Bundles from '../components/Bundles';
import CourseDetails from '../components/CourseDetails';
import Courses from '../components/Courses';
import Dashboard from '../components/Dashboard';

import Home from '../components/Home';
import Learn from '../components/Learn';

const MainRoutes: React.FC = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/myapps" element={<Navigate replace to="/learn" />} />
    <Route path="learn" element={<Learn />}>
      <Route path="courses" element={<Courses />}>
        <Route path=":courseId" element={<CourseDetails />} />
      </Route>
      <Route path="bundles" element={<Bundles />} />
    </Route>

    {/* Not need to define entire path in new route */}
    {/* <Route path="learn" element={<Learn />} />
    <Route path="/learn/courses" element={<Courses />} />
    <Route path="/learn/courses/:courseId" element={<CourseDetails />} /> */}

    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

// const MainRoutes: React.FC = (): JSX.Element => {
//   const elementRoutes: any = useRoutes([
//     {
//       path: '/',
//       element: <Home />,
//     },
//     {
//       path: '/myapps',
//       element: <Navigate replace to="/learn" />,
//     },
//     {
//       path: '/learn',
//       element: <Learn />,
//       children: [
//         {
//           path: 'courses',
//           element: <Courses />,
//           children: [
//             {
//               path: ':courseId',
//               element: <CourseDetails />,
//             },
//           ],
//         },
//         {
//           path: 'bundles',
//           element: <Bundles />,
//         },
//       ],
//     },
//     {
//       path: '/dashboard',
//       element: <Dashboard />,
//     },
//   ]);
//   return elementRoutes;
// };

export default MainRoutes;
