"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

type Props = {
  value: any;
  onChange: any;
  title: string;
};

const PasswordInput = ({ value, onChange, title }: Props) => {
    const [show, setShow] = useState(false);
  return (
    <div className="w-full relative">
      <label htmlFor="">{title}</label>
      <input
        value={value}
        onChange={onChange}
        type={show ? "text" : "password"}
        className="py-2 px-2 border-2 border-gray-500 bg-transparent w-full outline-none rounded-lg"
        placeholder={title}
      />
      <span
        onClick={() => setShow((pre) => !pre)}
        className=" absolute right-[20px] text-black dark:text-white cursor-pointer text-[20px] top-[35px]"
      >
        {show ? <Icon icon="mdi:eye" /> : <Icon icon="el:eye-close" />}
      </span>
    </div>
  );
};

export default PasswordInput;
