// import { Modal, Box } from "@mui/material";
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
    // <Modal
    //   open={open}
    //   onClose={() => setOpen(false)}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    //   <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
    //     <Component setOpen={setOpen} setRoute={setRoute} />
    //   </div>
    // </Modal>
    <></>
  );
};

export default CustomModal;
