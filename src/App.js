import logo from './logo.svg';
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import './App.css';

import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
   const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children :[
        {
          path:'/',element: <Home></Home>
        },
        {
          path:'/statistics',element: <Statistics></Statistics>
        },
        {
          path:'/blog',element: <Blog></Blog>
        }
      ]
     }
    
   ])
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
