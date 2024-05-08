import React from 'react';
import {  Link, Outlet } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 bg-gray-600 min-h-screen">
      <div className=" dropdown dropdown-right">
  <div tabIndex={0} role="button" className="btn m-1">Users</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-red-100 rounded-box w-40">
  <li className='font-bold text-sm text-black'>
            <Link to="/adduser" className='text-black border hover:bg-none'>
              <FaUsers />
              Add User
            </Link>
          </li>
          <li className='font-bold text-sm text-black'>
            <Link to="/alluser" className='text-black border hover:bg-none'>
              <FaUsers />
              All Users
            </Link>
          </li>
  </ul>
</div>
        <ul className='menu p-4 mt-20 py-auto'>
   
        </ul>
      </div>
      
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
