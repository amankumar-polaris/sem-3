import React, { useReducer } from "react";

const initialState = {
  mode: "normal",
  light: "green",
};

const trafficReducer = (state, action) => {
  switch (action.type) {
    case "Normal Traffic":
      return {
        mode: "normal",
        light: "green",
      };
    case "Heavy Traffic":
      return {
        mode: "heavy",
        light: "red",
      };
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(trafficReducer, initialState);
  console.log(state)
  return (
    <div className="mt-12 text-center">
      <h1 className="text-4xl font-bold">🚦 Traffic Light System</h1>

      <h2 className="mt-4 text-2xl font-semibold">Mode: default</h2>

      {/* Traffic Light */}
      {/* change the color dynamically */}
      <div className="w-32 bg-gray-900 p-5 mx-auto mt-5 rounded-2xl">
        <div
          className={`w-[70px] h-[70px] rounded-full mx-auto my-2  ${state.light === "red" ? "bg-red-500" : "bg-gray-300"}`}
        />

        <div
          className={`w-[70px] h-[70px] rounded-full mx-auto my-2  ${state.light === "yellow" ? "bg-yellow-500" : "bg-gray-300"}`}
        />

        <div
          className={`w-[70px] h-[70px] rounded-full mx-auto my-2  ${state.light === "green" ? "bg-green-500" : "bg-gray-300"}`}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          onClick={() => dispatch({ type: "Normal Traffic" })}
        >
          Normal Traffic
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          onClick={() => dispatch({ type: "Heavy Traffic" })}
        >
          Heavy Traffic
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition"
          onClick={() => dispatch({ type: "Midnight Traffic" })}
        >
          Midnight Traffic
        </button>

        <button
          className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition"
          onClick={() => dispatch({ type: "Emergency" })}
        >
          Emergency 🚨
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => dispatch({ type: "Normal Traffic" })}
        >
          Change Light
        </button>

        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          onClick={() => dispatch({ type: "Reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
