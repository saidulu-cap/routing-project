import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <center>
        <h2>Welcome to Homepage</h2>
        <Link className='btn btn-primary' to='/userlist' ele>Users List</Link>
      </center>
    </div>
  );
}

export default Home;
