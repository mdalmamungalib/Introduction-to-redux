import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Parent = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='border border-purple-700 rounded-lg p-5 w-[1280px] space-y-5'>
            <h2 className='text-2xl font-semibold text-lime-700'>Parent</h2>
            <ChildOne setCount={setCount} count={count}/>
            <ChildTwo setCount={setCount} count={count}/>
        </div>
    );
};

export default Parent;