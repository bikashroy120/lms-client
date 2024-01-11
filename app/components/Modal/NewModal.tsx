"use client"



import { Modal } from "antd";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children:React.ReactNode;
};

const NewModal = ({
  open,
  setOpen,
  children
}: Props) => {


  return (
    <Modal
    centered
    cancelText
    footer={null}
    open={open}
    closeIcon={null}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
    >
      <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <div>
            {children}
        </div>
      </div>
    </Modal>

  );
};

export default NewModal;
