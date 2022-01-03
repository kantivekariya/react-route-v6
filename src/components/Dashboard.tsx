import React from 'react';
import { useLocation } from 'react-router';

const Dashboard: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <div>
      <h1>
        Info that i got here is
        {location.state}
      </h1>
    </div>
  );
};

export default Dashboard;
