import React from "react";

export default function inputDefault({ icon, label, placeholder, type, onchange, name }) {
  return (
    <div className="py-3">
      <div className="flex">
        {icon}
      <label className="text-sm font-semibold text-gray-700 ms-3">{label}</label>
      </div>
      <input className="w-full border-b-2 border-gray-300 text-sm py-2 px-2" type={type} placeholder={placeholder} onChange={onchange} name={name} />
    </div>
  );
}
