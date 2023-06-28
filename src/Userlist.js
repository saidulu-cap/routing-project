import React from 'react';
import { Link } from 'react-router-dom';

const Userlist = () => {
    const data = [
        {name: 'Saidulu', id: 121, company: 'Capillary', email: 'saidulu@capillary.com', mobile: 9030000001, location: 'Hyderabad'},
        {name: 'Balaji', id: 122, company: 'Capillary', email: 'balaji@capillary.com', mobile: 9030000002, location: 'Hyderabad'},
        {name: 'Naseer', id: 123, company: 'Capillary', email: 'naseer@capillary.com', mobile: 9030000003, location: 'Hyderabad'},
        {name: 'Asit', id: 124, company: 'Capillary', email: 'asit@capillary.com', mobile: 9030000004, location: 'Hyderabad'},
        {name: 'Keerti', id: 125, company: 'Capillary', email: 'keerti@capillary.com', mobile: 9030000005, location: 'Bangalore'},
        {name: 'Ananda', id: 126, company: 'Capillary', email: 'ananda@capillary.com', mobile: 9030000006, location: 'Bangalore'}
    ];
    const [...list] = data;
  return (
    <div>
    <center>
    <Link className='btn btn-primary' to='/'>Home</Link>
    <table className='table table-bordered'>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Company</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>Show Details</th>
        </tr>
      {
        data.map((item, index) => 
        <tr>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.company}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>{item.location}</td>
            <td><Link className='btn btn-primary' to={`/userdetails/${item.id}`} state={list}>Get Detais</Link></td>
        </tr>
        )
      }
    </table>
    </center>
    </div>
  );
}

export default Userlist;
