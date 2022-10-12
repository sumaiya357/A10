import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReQuiz = () => {
    const Quiz = useLoaderData();
    console.log(Quiz)
    const allQuiz = Quiz.data
   
    return (
        <div>
         
            <h2>{allQuiz.name} Quiz Test </h2>
        </div>
    );
};

export default ReQuiz;