import React from 'react'

export default function SelectInputDefault({ icon, label, name, options, onchange }) {

    return (
        <div className="py-3">
            <div className="flex">
                {icon}
                <label className="text-sm font-semibold text-gray-700 ms-3">{label}</label>
            </div>
            <select className="w-full border-b-2 border-gray-300 text-sm py-2 px-2" name={name} defaultValue={'Select User'} onChange={onchange}>
                <option value="Select User" disabled>Select user</option>
                {options.map((item, index) => (
                    <option key={index} value={item.id}>{item.firstName} {item.lastName}</option>
                ))}
            </select>
        </div>
    )
}
