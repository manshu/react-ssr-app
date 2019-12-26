import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="text-xl">I am the home component updated again</div>
            <button onClick={() => console.log('Hi there')}>Press Me</button>
        </div>
    )
};

export default Home;