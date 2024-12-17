import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [copy, setCopy] = useState(false);
  const passwordRef = useRef(null);
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetsNum = `${alphabets}0123456789`;
  const specialSymbols = `${alphabetsNum}!%{]}[?/,.*&^+_);`;

  const generatePassword =useCallback( () => {
    let characterPool = alphabets;

    if (numbers) {
      characterPool = alphabetsNum;
    }
    if (symbols) {
      characterPool = specialSymbols;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool[randomIndex];
    }
    setPassword(newPassword);
  },[length,numbers,symbols,setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, symbols,generatePassword]);

  const handleCopyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  },[password]);
  return (    
    <>
    <h1 className="text-white text-3xl text-center font-bold py-6">Password Generator</h1>
     <div className="w-full h-screen bg-black text-white flex justify-center my-4">
      <div className="bg-slate-800 w-[55vh] h-[12vh] lg:w-[100vh] p-4 rounded-2xl">
        <div className="flex items-center">
          <input
            className="outline-none w-full h-10 rounded-l-lg text-yellow-700 font-sans font-bold pl-3"
            type="text"
            value={password}
            readOnly
            placeholder="password"
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 outline-none h-10 px-3 rounded-r-lg"
            onClick={handleCopyPassword}
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex items-center gap-2 py-3 text-yellow-700 font-sans font-semibold">
          
          <input
            type="range"
            min="8"
            max="30"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
            className=" w-[15vw] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span>Length ({length})</span>
        
          <input
            type="checkbox"
            defaultChecked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
            <p>Numbers</p>
      
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
              <p>Characters</p>
        </div>
      </div>
    </div>
    </>
     
  );
}

export default App;
