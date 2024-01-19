"use client"

// import { Modal, Box } from "@mui/material";
import { Modal } from "antd";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  active: any;
  component: any;
  setRoute: (route: string) => void;
};

const CustomModal = ({
  open,
  setOpen,
  active,
  component: Component,
  setRoute,
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
        <Component setOpen={setOpen} setRoute={setRoute} />
      </div>
    </Modal>

  );
};

export default CustomModal;
