import React from 'react'

type Props = {
    label:string;
    type?:any;
    value:any;
    onChange:any;
}

const CustomInput = ({label,type="text",value,onChange}: Props) => {
  return (
    <div className=" flex items-start flex-col gap-1 py-3">
    <label className=" text-black font-semibold text-sm" htmlFor={label}>
      {label}
    </label>
    <input
      type={type}
      required
      id={label}
      value={value}
      onChange={onChange}
      className=" w-full py-3 px-3 border bg-transparent  rounded-lg border-gray-400 focus:outline-blue-500"
      placeholder={`Enter ${label}`}
    />
  </div>
  )
}

export default CustomInput