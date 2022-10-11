import React from 'react';

const Topics = ({topic}) => {
    return (
      
         <div >
            
            <div className='w-1/2 border-2 border-sky-200 rounded-md mt-5 p-3' >
                <img className= " bg-slate-100 "
                 src={topic.logo}/>

                <div className='mt-2'>
                <h2>Name:{topic.name}</h2>
                <h3>Ques No: {topic.total}</h3>
                <button className='bg-cyan-400 rounded p-1'>Quiz</button>
                </div>
            </div>
            
        </div>
      
    );
};

export default Topics;