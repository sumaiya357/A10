 import React from 'react';
 import {Link} from "react-router-dom";
 
 const NavBar = () => {
    return (
        <div className='text-pink-600 mx-20 mt-10 mb-10  flex flex-row justify-between  md:flex-row'>
            <div>
              <h3 className='text-2xl font-bold'> Takin' a Quiz</h3>
            </div>
            <div className='space-x-4'>
                <Link to={'/'}>Home</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link>
            </div>
        </div>
    );
 };
 
 export default NavBar;