import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic,handleQuiz}) => {
    const {id} = topic

    return (
      
         <div >
            
            <div className='w-2/3 border-2 border-sky-200 rounded-md mt-20 mb-10 p-3' >
                <img className= " bg-slate-100 "
                 src={topic.logo}/>

                <div className='mt-4 '>
                <h2 className='font-bold text-pink-500'>Name:{topic.name}</h2>
                <h3 className='text-pink-500'>Ques No: {topic.total}</h3>

                <div className='mt-3'>
                <Link to={`/quiz/${id}`} onClick={()=>{handleQuiz(id)}} className=' text-slate-100
                 bg-cyan-400 rounded px-2 py-1  font-semibold'>Start Quiz</Link>
                </div>
                </div>
            </div>
            
        </div>
      
    );
};

export default Topics;