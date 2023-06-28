import React from 'react';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <div>
      <center>
        <h2>Page not found 404 Error !</h2>
        <Link to='/'>Go to Homepage</Link>
      </center>
    </div>
  );
}

export default Pagenotfound;
