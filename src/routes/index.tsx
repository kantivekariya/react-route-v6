import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Bundles from '../components/Bundles';
import CourseDetails from '../components/CourseDetails';
import Courses from '../components/Courses';
import Dashboard from '../components/Dashboard';

import Learn from '../components/Learn';

const MainRoutes: React.FC = (): JSX.Element => (
  /* Routes using react route config */
  <Routes>
    <Route path="/" element={<Navigate replace to="/learn" />} />
    <Route path="learn" element={<Learn />}>
      <Route path="courses" element={<Courses />}>
        <Route path=":courseId" element={<CourseDetails />} />
      </Route>
      <Route path="bundles" element={<Bundles />} />
    </Route>

    {/* Not need to define entire path in v6 new route */}

    {/* <Route path="learn" element={<Learn />} />
    <Route path="/learn/courses" element={<Courses />} />
    <Route path="/learn/courses/:courseId" element={<CourseDetails />} /> */}

    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

/* Object Based routes using useRoutes hooks */

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
