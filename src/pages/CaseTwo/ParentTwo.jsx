import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const ParentTwo = () => {
    return (
        <div className='border border-purple-700 rounded-lg p-5 w-[1280px] space-y-5'>
            <h2 className='text-2xl font-semibold text-lime-700'>Parent 2</h2>
            <ChildOne />
            <ChildTwo />
        </div>
    );
};

export default ParentTwo;