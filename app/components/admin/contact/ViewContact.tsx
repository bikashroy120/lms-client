import React, { useState } from "react";
import { LuView } from "react-icons/lu";
import NewModal from "../../Modal/NewModal";
import { format } from "timeago.js";

type Props = {
    row:any
};

const ViewContact = ({row}: Props) => {
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
        title="View Contact"
      >
        <div className="">
            <div className=" flex flex-col items-center justify-start mt-5">
                {/* <div className=" w-[100px] h-[100px] overflow-hidden rounded-full flex items-center justify-center">
                  <Image src={row?.avater ? row?.avater : "/user.png"} width={100} height={100} alt="user" className="w-full h-full object-fill"/>
                </div> */}
                <div className=" text-start mt-3">
                    <h2 className=" text-[20px] font-semibold text-text">Name : <span className=" text-lightText">{row?.name}</span></h2>
                    <h2 className=" text-[20px] font-semibold text-text">Email : <span className=" text-lightText">{row?.email}</span></h2>
                    <h2 className=" text-[20px] font-semibold text-text">Phone : <span className=" text-lightText">{row?.phone}</span></h2>
                    <h2 className=" text-[20px] font-semibold text-text">Time : <span className=" text-lightText">{format(row?.createdAt)}</span></h2>
                    <h2 className=" text-[20px] font-semibold text-text">Message : <span className=" text-lightText">{row?.message}</span></h2>
                </div>
            </div>
        </div>
      </NewModal>
    </>
  );
};

export default ViewContact;
