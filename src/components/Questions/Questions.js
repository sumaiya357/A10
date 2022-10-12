import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEye} from '@fortawesome/free-solid-svg-icons'
import Options from '../Options/Options';


const Questions = ({quiz}) => {
    // console.log(quiz)
    
    const options= quiz.options
    // console.log(options)
    return (

       <div  className='border-4 border-red-600 m-5'>

        {/* ---QUES ---*/}

         <div className='border-4 border-indigo-600 m-5 flex justify-between py-20 px-10'>
           <div>
           <h2 className='text-xl'>{quiz.question}</h2>
           </div>

           {/* ----ICON ----*/}
           <div>
            
               <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
           </div>
        </div>

        <div className='border-4 border-black-600 m-5 grid grid-cols-2 gap-4'>
               {
                options.map(option=> 
               <Options option={option}>

               </Options>)
               }
        </div>
      
       </div>
    );
};

export default Questions;