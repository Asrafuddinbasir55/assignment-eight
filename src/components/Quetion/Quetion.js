import React from 'react';
import './Quetion.css'

const Quetion = () => {
    return (
        <div className='Queition-aria'>
            <h4 className='Queition'>How React Works..?</h4>
            <p>ReactJS offers graceful solutions to some of front-end programming’s most persistent issues,  you to build dynamic and interactive web apps with ease. You’ll develop a strong of React’s most essential concepts: JSX, class and function components, props, state, lifecycle methods ReactJS is simply a JavaScript library for building user interfaces. It was created by Facebook and now has a large community, including FB, that actively maintains it.</p>
        


            <h4 className='Queition'>How useState..?</h4>
            <p> React Hooks must be called in the same order in every component render, in simpler words, any hook should be at the very top and inside the function component without any check, loops, etc For example, the following code is wrong, and won't as we expect The useState function takes as argument a value for the initial state. In this case, the count starts out with 0. In, the hook returns an array of two values: count and setCount. It's up to you to name the two values, they are destructured from the returned array where renaming is allowed.</p>
        </div>
    );
};

export default Quetion;