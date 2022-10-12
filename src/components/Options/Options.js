import React from 'react';
// import {Radio} from 'tailwindcss';

const Options = (props) => {
    console.log(props)
    return (
        <div>
            
            <div className=' '>
          
           
           <input className='form-check-input appearance-none rounded-full h-4 w-4 border-2 border-blue-300 bg-white checked:bg-blue-600 checked:border-blue-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-3 'type="radio" name="flexRadioDefault" id="flexRadioDefault1" ></input>
         
           <span>{props.option}</span>
          
            </div>
        </div>
    );
};

export default Options;