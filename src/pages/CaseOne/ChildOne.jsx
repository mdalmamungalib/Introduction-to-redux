import React from "react";

const ChildOne = ({ count, setCount }) => {
  return (
    <div className="text-white border border-orange-600 rounded-lg p-5">
      <button className="btn bg-lime-700 text-white rounded-full g">
        1
      </button>
      <div className="flex justify-center items-center space-x-3 p-20">
        <button onClick={() => setCount((prev) => prev - 1)} className="btn bg-red-500 text-white hover:bg-red-400">
          Decrement
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)} className="btn bg-green-500 text-white hover:bg-green-400">
          Increment
        </button>
      </div>
    </div>
  );
};

export default ChildOne;
