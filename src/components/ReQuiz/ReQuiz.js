import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const ReQuiz = () => {
    const Quiz = useLoaderData();
    console.log(Quiz)
    const allQuiz = Quiz.data
    console.log(allQuiz)
    const allQuiz2 = allQuiz.questions
    console.log(allQuiz2)
    // const allQuiz2 = allQuiz.questions
    // console.log(allQuiz2)
   
    return (
       
        <div>
    
    {/* border-4 border-indigo-600  */}
           <div >
           <h2 className='text-2xl text-center mt-24 mb-10 font-serif text-violet-700'>{allQuiz.name} Quiz Test </h2>
           </div>

            <div className='font-mono border-4 border-indigo-600 text-center'>
                {
                    allQuiz2.map(quiz=>
                    <Questions
                    key={quiz.id}
                    quiz={quiz}></Questions>)
                }
             
            </div>
        </div>
    );
};

export default ReQuiz;