import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-black");
  const colors = [
    { name: "Red", colorCode: "bg-red-500", hoverColor: "hover:bg-red-700" },
    { name: "Blue", colorCode: "bg-blue-500", hoverColor: "hover:bg-blue-700" },
    { name: "Green", colorCode: "bg-green-500", hoverColor: "hover:bg-green-700" },
    { name: "Yellow", colorCode: "bg-yellow-500", hoverColor: "hover:bg-yellow-700" },
    { name: "Orange", colorCode: "bg-orange-500", hoverColor: "hover:bg-orange-700" },
    { name: "Purple", colorCode: "bg-purple-500", hoverColor: "hover:bg-purple-700" },
    { name: "Pink", colorCode: "bg-pink-500", hoverColor: "hover:bg-pink-700" },
    { name: "Gray", colorCode: "bg-gray-500", hoverColor: "hover:bg-gray-700" },
    { name: "Teal", colorCode: "bg-teal-500", hoverColor: "hover:bg-teal-700" },
    { name: "Indigo", colorCode: "bg-indigo-500", hoverColor: "hover:bg-indigo-700" },
    { name: "Black", colorCode: "bg-black", hoverColor: "hover:bg-gray-800" },
    { name: "Amber", colorCode: "bg-amber-500", hoverColor: "hover:bg-amber-700" },
    { name: "Lime", colorCode: "bg-lime-500", hoverColor: "hover:bg-lime-700" },
    { name: "Cyan", colorCode: "bg-cyan-500", hoverColor: "hover:bg-cyan-700" },
    { name: "Rose", colorCode: "bg-rose-500", hoverColor: "hover:bg-rose-700" },
    { name: "Fuchsia", colorCode: "bg-fuchsia-500", hoverColor: "hover:bg-fuchsia-700" },
    { name: "Emerald", colorCode: "bg-emerald-500", hoverColor: "hover:bg-emerald-700" },
    { name: "Sky", colorCode: "bg-sky-500", hoverColor: "hover:bg-sky-700" },
    { name: "Slate", colorCode: "bg-slate-500", hoverColor: "hover:bg-slate-700" },
    { name: "Zinc", colorCode: "bg-zinc-500", hoverColor: "hover:bg-zinc-700" },
    { name: "Stone", colorCode: "bg-stone-500", hoverColor: "hover:bg-stone-700" },
    { name: "Violet", colorCode: "bg-violet-500", hoverColor: "hover:bg-violet-700" },
  ];

  const handleColorChanger = (colorName) => {
    setColor(colorName);
  };

  return (
    <div className={`${color} h-screen w-full transition-all duration-500`}>
      <div className="absolute bottom-0 left-0 right-0 mx-auto mb-6 w-11/12 md:w-3/4 lg:w-1/2 p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-center text-lg font-semibold text-gray-700 mb-4">
          Pick a Background Color
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          {colors.map((item, index) => (
            <button
              key={index}
              className={`${item.colorCode} ${item.hoverColor} w-20 h-8 rounded-3xl text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md`}
              onClick={() => handleColorChanger(item.colorCode)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
