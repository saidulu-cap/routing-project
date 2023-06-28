import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Userdetails = () => {
const {id} = useParams();
const locations = useLocation();
const state = locations.state;
return (
    <div>
      <center>
      <Link className='btn btn-primary me-1' to='/'>Home</Link>
      <Link className='btn btn-primary me-1' to='/userlist'>User List</Link>
       <center>
       <table className='table table-bordered'>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Company</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
        </tr>
        {
          state.filter(e => e.id == id).map(e => 
            <tr>
            <td>{e.name}</td>
            <td>{e.id}</td>
            <td>{e.company}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.location}</td>
        </tr>
            )
        }
        </table>
       </center>
       </center>
    </div>
  );
}

export default Userdetails;
