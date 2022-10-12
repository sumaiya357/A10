import React from 'react';

const Blog = () => {
    return (
        <div>

            {/* QUES-1 */}
            <h3 className='text-2xl mb-3 m-10 bg-indigo-500 text-yellow-50 rounded p-3'>Questions:</h3>
            <div class="grid grid-cols-1 m-10 gap-y-10">
               <div className='bg-slate-200 shadow-lg shadow-indigo-500/50 p-7 rounded-2xl'>
                <h2 className='text-2xl mb-3'>Q:1- What is the purpose of react router?</h2>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
 
               {/* Ques-2 */}
              <div className='bg-slate-200 shadow-lg shadow-indigo-500/50 p-7 rounded-2xl'>
                <h2 className='text-2xl mb-3'>Q:2- How context API works?</h2>
                <p>Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
                </div>
              {/* Ques-3 */}
              <div className='bg-slate-200 shadow-lg shadow-indigo-500/50 p-7 rounded-2xl'>
                <h2 className='text-2xl mb-3'>Q:3- Give Brief description of 'useRef'</h2>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.</p>
                </div>
</div>
  </div>
    )}

   

export default Blog;