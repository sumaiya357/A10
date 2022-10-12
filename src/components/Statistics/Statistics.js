import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  
  const [quiz, setQuiz] = useState([])
     useEffect(()=>{
          
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=>{
            const quizLoaded = data.data.data
            // console.log(quizes)
            const quizdata = quizLoaded.map(Quiz =>{
                  const quiztotal ={
                     
                     QuizNo: Quiz.total
                  }
                  return quiztotal
            })
            console.log(quizdata)
            setQuiz(quizdata)
        })
     },[])
  
    return (
     <div className='flex justify-center'>
       
          
        <BarChart className='text-center' width={450} height={400} data={quiz}>
          <Bar dataKey="QuizNo" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
 
     </div>
    );
};

export default Statistics;