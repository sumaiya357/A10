import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEye} from '@fortawesome/free-solid-svg-icons'
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({quiz}) => {
    // console.log(quiz)

    const {correctAnswer} = quiz
    // console.log(correctAnswer) ;

    const options= quiz.options;
    // console.log(options)

    const notify =() =>{
        toast(`correct ans: ${correctAnswer}`)
    }

    // const handleIcon = (correctAnswer)=>{
    //     console.log('correct ans: ', correctAnswer)
    // }
    return (

       <div  className='border-4 border-slate-200 mt-20 mx-56 pb-10 rounded-2xl  shadow-lg shadow-indigo-500/50
        '>

        {/* ---QUES ---*/}

         <div className=' m-5 grid grid-cols-3  py-20 px-10'>
           <div className='col-span-2 '>
           <h2 className='text-2xl '><span className='font-extrabold'>Ques:</span>{quiz.question}</h2>
           </div>

           {/* ----ICON ----*/}
           <div className=''>
            
               <button onClick={notify}>
               <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
               </button>
               <ToastContainer/>
           </div>
        </div>

        <div className=' m-5 grid grid-cols-1 md:grid-cols-4 gap-4'>
               {
                options.map((option)=> 
               <Options option={option}>

               </Options>)
               }
        </div>
      
       </div>
    );
};

export default Questions;