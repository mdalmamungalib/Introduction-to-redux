import React, { useContext } from "react";
import { COUNT_CONTEXT } from "../../Context/CountContext";

const ChildOne = () => {
  const {count, setCount} = useContext(COUNT_CONTEXT)
  return (
    <div className="p-5 text-white border border-orange-600 rounded-lg">
      <button className="text-white rounded-full btn bg-lime-700 g">
        1
      </button>
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center space-x-3 bg-slate-200 w-[520px] h-[220px] rounded-lg">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="text-white bg-red-500 btn hover:bg-red-400"
          >
            Decrement
          </button>
          <h2>{count}</h2>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="text-white bg-green-500 btn hover:bg-green-400"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildOne;