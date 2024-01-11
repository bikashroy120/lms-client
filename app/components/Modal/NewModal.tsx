"use client";

import { Modal } from "antd";
import React from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  width?: number;
  title?:string
};

const NewModal = ({ open, setOpen, children, width,title }: Props) => {
  return (
    <Modal
      centered
      cancelText
      footer={null}
      open={open}
      closeIcon={null}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={width}
    >
      <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <div className="px-3 pt-2 flex items-center justify-between mb-5">
          <h2 className=" text-text text-[20px] font-bold">{title}</h2>
          <button
            onClick={() => setOpen(false)}
            className=" text-[20px] w-[20px] h-[20px] flex items-center justify-center bg-red-300 text-white rounded-lg hover:bg-red-500 duration-300"
          >
            <IoClose />
          </button>
        </div>
        <div className="px-3">{children}</div>
      </div>
    </Modal>
  );
};

export default NewModal;
