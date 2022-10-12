import logo from './logo.svg';
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import './App.css';

import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ReQuiz from './components/ReQuiz/ReQuiz';



function App() {
   const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children :[
        {
          path:'/',
          loader:async()=>{
           return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path:'/statistics',element: <Statistics></Statistics>
        },
        {
          path:'/blog',element: <Blog></Blog>
        }
      ]
     },
    {
      path:'/quiz/:Id',

      loader:({params})=>{
      console.log(params.Id)
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
  
      },
      element:<ReQuiz></ReQuiz>
    },

    {
      path:'*',
      element: <h2 className='font-extrabold text-5xl text-center mt-40'>This page Not Available 4O4</h2>
    }
    
   ])
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
