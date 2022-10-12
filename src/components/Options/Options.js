import React from 'react';

// import {Radio} from 'tailwindcss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options = (props) => {
    console.log(props)
    const {option} =props
    // console.log(option)

    const {correctAnswer} =props
    // console.log(correctAnswer)


    const quizHandle =(option) =>{
        console.log(option,'clciked')
        // if(option === correctAnswer){
        //     toast.success('correct')
        // }
        // else{
        //     toast.error('wrong')
        // }
    }
    return (
        <div>
            
            <div className=' '>
          
           
          <button onClick={ quizHandle}>
          <input className='form-check-input appearance-none rounded-full h-4 w-4 border-2 border-blue-300 bg-white checked:bg-blue-600 checked:border-blue-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-3 'type="radio" name="flexRadioDefault" id="flexRadioDefault1"  ></input>
          </button>
          <ToastContainer/>
         
           <span>{props.option}</span>
          
            </div>
        </div>
    );
};

export default Options;