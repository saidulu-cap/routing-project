import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const About = () => {
  let {search} = useLocation();
  let urlparam = new URLSearchParams(search);
  return (
    <div>
      <center>
        <h2>Welcome to About Us page</h2>
        <h3>Query param: {search}</h3>
        <h3>Query param name: {urlparam.get('name')}</h3>
        <h3>Query param id: {urlparam.get('id')}</h3>
        <Link to='/'>Home</Link>{' '}
        <Link to='/dashboard'>Dashboard</Link>
      </center>
    </div>
  );
}

export default About;
