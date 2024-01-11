import React, { useState } from "react";
import { LuView } from "react-icons/lu";
import NewModal from "../../Modal/NewModal";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

type Props = {
    row:any
};

const ViewUser = ({row}: Props) => {
    const [open,setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" text-[20px] hover:text-green-500"
      >
        <LuView />
      </button>

      <NewModal 
        open={open}
        setOpen={setOpen}
        title="View User"
      >
        <div className="">
            <div className=" flex flex-col items-center justify-center mt-5">
                <div className=" w-[100px] h-[100px] overflow-hidden rounded-full flex items-center justify-center">
                  <Image src={row?.avater ? row?.avater : "/user.png"} width={100} height={100} alt="user" className="w-full h-full object-fill"/>
                </div>
                <div className=" text-center mt-3">
                    <h2 className=" text-[20px] font-semibold text-text">Name : {row?.name}</h2>
                    <h2 className=" text-[20px] font-semibold text-text">Email : {row?.email}</h2>
                    <h2 className=" text-[20px] font-semibold text-text">Purchased : {row?.courses?.length}</h2>
                    <h2 className=" text-[20px] font-semibold text-text">Address : {row?.address}</h2>
                </div>
            </div>
        </div>
      </NewModal>
    </>
  );
};

export default ViewUser;
