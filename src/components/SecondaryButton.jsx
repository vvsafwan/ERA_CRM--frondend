import React from "react";

export default function SecondaryButton({ text, onclick, textColor, borderColor }) {
  return (
    <div>
      <button
        className={`text-${textColor} border-${borderColor} border-2 font-semibold py-3 px-14 hover:scale-110 transition delay-50 duration-200 ease-in-out`}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
}
