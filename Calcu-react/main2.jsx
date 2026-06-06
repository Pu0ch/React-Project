import { useState } from "react";

export default function Main2() {
  const [value, setValue] = useState("");

  const handleClick = (value) => {
    setValue((prev) => prev + value);
  };
  
 const handleEqual = (result) => {
   if (value.includes("+")) {
     const [a, b] = value.split("+");
     result = Number(a) + Number(b);
   } else if (value.includes("-")) {
     const [a, b] = value.split("-");
     result = Number(a) - Number(b);
   } else if (value.includes("*")) {
     const [a, b] = value.split("*");
     result = Number(a) * Number(b);
   } else if (value.includes("/")) {
     const [a, b] = value.split("/");
     result = Number(a) / Number(b);
   } else if (value.includes("%")) {
     const [a, b] = value.split("%")
     result = Number(a) % Number(b)
   }

   setValue(result.toString());
 };
  
  const clear = () => {
    setValue("");
  };
  const handlePandN = () => {
    const current = parseFloat(value);
    if (current === 0) return;
    setValue((current * -1).toString());
  };

  return (
    <>
      <div className="flex justify-center mt-16">
        <p className="bg-gray-400 flex flex-col flex-wrap items-end justify-end w-77 h-24 text-white text-5xl font-semibold ">
          {value}
        </p>
      </div>
      <div className="flex flex-row justify-center bg-white gap-0.5">
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={clear}
        >
          AC
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={handlePandN}
        >
          +/-
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("%")}
        >
          %
        </button>
        <button
          className="w-19 h-16 bg-orange-400 text-white text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("/")}
        >
          /
        </button>
      </div>

      <div className="flex flex-row justify-center bg-white gap-0.5 m-0.5 ">
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="w-19 h-16 bg-orange-400 text-white text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("*")}
        >
          x
        </button>
      </div>

      <div className="flex flex-row justify-center bg-white gap-0.5 m-0.5">
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="w-19 h-16 bg-orange-400 text-white text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("-")}
        >
          -
        </button>
      </div>

      <div className="flex flex-row justify-center bg-white gap-0.5 m-0.5 ">
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="w-19 h-16 bg-orange-400 text-white text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("+")}
        >
          +
        </button>
      </div>

      <div className="flex flex-row justify-center bg-white gap-0.5 m-0.5 ">
        <button
          className="w-39 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="w-19 h-16 bg-gray-100 text-black text-2xl font-semibold hover:bg-gray-300"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="w-19 h-16 bg-orange-400 text-white text-2xl font-semibold hover:bg-gray-300"
          onClick={handleEqual}
        >
          =
        </button>
      </div>
    </>
  );
}
