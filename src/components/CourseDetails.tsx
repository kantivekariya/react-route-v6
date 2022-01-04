/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetails: React.FC = (): JSX.Element => {
  /* useNavigate instead of useHistory */
  const navigate = useNavigate();
  const { courseId } = useParams();
  return (
    <div>
      <h1>URL Params is : {courseId}</h1>
      <button
        type="button"
        onClick={() => {
          navigate('/dashboard', { state: courseId });
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state="DJANGO">
        Test link
      </Link>
    </div>
  );
};

export default CourseDetails;
