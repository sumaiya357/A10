import React from 'react';
import Header from '../Header/Header';
import {useLoaderData, useNavigate } from "react-router-dom";
import Topics from '../Topics/Topics';

const Home = () => {
    const topics= useLoaderData()
    const data = topics.data
    // console.log(data)
    // console.log(topics)

   
   const handleQuiz= id =>{
 
    // console.log('quiz clicked',id)
   }
    return (
        <div >
            <Header></Header>
            
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center ml-56 " >
          {
            data.map(topic => 
            <Topics
            key={topic.id}
            topic={topic}
            handleQuiz={handleQuiz}>

            </Topics>)
           }
          </div>
          
       
        </div>
    );
};

export default Home;