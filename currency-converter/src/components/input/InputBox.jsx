import React, { useId } from "react";

export function InputBox({
  label,
  currencyOptions = [],
  amount = "",
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  className = "",
  placeholder
}) {
  const amountInputId = useId();

  return (
    <div
      className={`w-full h-auto bg-white/50 rounded-2xl p-4 my-3 flex gap-2 justify-between items-center text-gray-800 font-semibold ${className}`}
    >
      {/* Amount Input */}
      <div className="flex-col">
        <div className="flex-col">
          <label className="block" htmlFor={amountInputId}>
            {label.toUpperCase()}
          </label>
          <input
            id={amountInputId}
            className="outline-none cursor-pointer  bg-transparent placeholder:text-gray-600 rounded-lg mt-1"
            placeholder={placeholder}
            type="number"
            value={amount}
            onChange={(e) => {
              if (onAmountChange) {
                const value = Number(e.target.value);
                onAmountChange(value > 0 ? value : null);
              }
            }}
          />
        </div>
      </div>

      {/* Currency Selector */}
      <div className="flex-col">
        <div>
          <label className="block pt-2">Currency Type</label>
          <select
            className="ml-6 rounded-lg p-1 py-2 mt-1 w-20 md:w-40 lg:w-80 h-auto bg-gray-400 font-bold outline-none cursor-pointer"
            value={selectCurrency}
            onChange={(e) => {
              if (onCurrencyChange) onCurrencyChange(e.target.value);
            }}
            disabled={!currencyOptions.length}
          >
            {currencyOptions.length > 0 ? (
              currencyOptions.map((currencyCode) => (
                <option className=" " key={currencyCode} value={currencyCode}>
                  {currencyCode.toLowerCase()}
                </option>
              ))
            ) : (
              <option value="transition-all " disabled>
                No Options
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
