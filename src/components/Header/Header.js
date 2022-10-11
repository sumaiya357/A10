import React from 'react';
import Logo from '../images.jpeg'

const Header = () => {
    return (
        <div className='h-48 mx-20  h-48 bg-pink-600 flex rounded-2xl'>

           <div className='mx-20 mt-7  '>
             <img className='w-28 h-28 rounded-full  ml-10' src={Logo}/>
           </div>
           
           <div className='flex items-center italic font-bold text-2xl text-slate-200'>
            <h2 className='font-serif'>LET'S Play.. </h2>
        
             <h2>You can test your web development skills with us.
             There is no time limit !!
             </h2>
           </div>
          
        </div>
    );
};

export default Header;