import React from 'react';
import Header from '../Header/Header';
import {useLoaderData } from "react-router-dom";
import Topics from '../Topics/Topics';

const Home = () => {
    const topics= useLoaderData()
    const data = topics.data
    console.log(data)
    // console.log(topics)
    return (
        <div >
            <Header></Header>
         
          <div className="grid grid-cols-2 gap-4 justify-items-center ml-56 " >
          {
            data.map(topic => 
            <Topics
            key={topic.id}
            topic={topic}>

            </Topics>)
           }
          </div>
          
       
        </div>
    );
};

export default Home;