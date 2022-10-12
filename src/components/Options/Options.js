import React from 'react';


const Options = (props) => {
    console.log(props)
    return (
        <div>
            
            <div className='default-radio-1 border-4 border-black-600'>
            <p>{props.option}</p>
         
            </div>
        </div>
    );
};

export default Options;