import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Courses: React.FC = (): JSX.Element => {
  const courseList = ['React', 'Angular', 'Vue', 'Nodejs'];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>

      <p>More test</p>
      <NavLink
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'pink' : 'yellow',
        })}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to="/learn/courses/tests">
        tests
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Courses;
