import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  let params = useParams();
  return (
    <div>
      <center>
        <h2>Welcome to Dashboard page</h2>
        <h3>Path param: {params.name}</h3>
        <Link to='/'>Home</Link>{' '}
        <Link to='/about?name=saidulu'>About</Link>
      </center>
    </div>
  );
}

export default Dashboard;
