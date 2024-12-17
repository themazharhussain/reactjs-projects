import React, { useEffect, useState } from "react";
import { BackgroundImage } from "./constants";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState();

  // This custom hook will return data from API
  const currencyInfo = useCurrencyInfo(from);
  useEffect(() => {
    if (currencyInfo && typeof currencyInfo === "object") {
      setCurrencyOptions(Object.keys(currencyInfo));
    }
  }, [currencyInfo]);

  // Swap currency options
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  // Currency conversion
  const handleCurrencyConverter = () => {
    if (amount && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-no-repeat transition-all duration-1000 ease-in-out "
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-full md:w-[60vw] h-auto bg-gray-800/50 rounded-2xl border-gray-600/50 border-2 flex items-center justify-center py-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCurrencyConverter();
          }}
        >
          <div className="p-2">
            <InputBox
              label={`FROM ${from}`}
              currencyOptions={currencyOptions}
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(value) => setAmount(value)}
              selectCurrency={from}
              placeholder="Enter Amount..."
            />
            <div className="flex items-center justify-center -mt-5 -mb-5">
              <button
                className="w-20  h-12  border-[1px] text-white bg-blue-700 hover:bg-blue-600 rounded-lg px-2 font-semibold"
                type="button"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <InputBox
              label={`To ${to}`}
              currencyOptions={currencyOptions}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              placeholder="Converted Amount ..."
            />
            <div className="w-full h-auto flex items-center justify-center mt-4">
              <button className="text-white/70 font-semibold text-lg bg-blue-700 hover:bg-blue-600 p-4 rounded-2xl " type="submit">
                Convert {from.toUpperCase()}{" "} to {" "} {to.toUpperCase()}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
