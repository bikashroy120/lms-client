import React, { useState } from "react";
import { LuView } from "react-icons/lu";
import NewModal from "../../Modal/NewModal";
import Image from "next/image";

type Props = {
  row: any;
};

const ViewOrder = ({ row }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" text-[20px] hover:text-green-500"
      >
        <LuView />
      </button>

      <NewModal open={open} setOpen={setOpen} title="View Order" width={1000}>
        <div className=" ">
          <div className=" w-full flex items-start flex-col lg:flex-row justify-between gap-7">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src={row?.courseId?.thumbnail}
                width={500}
                height={500}
                alt="thumbnail_image"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-full">
              <h2 className=" text-text text-[23px] font-semibold">
                {row?.courseId?.name}
              </h2>
              <h3 className=" text-[20px] font-semibold">
                Category : {row?.courseId?.category}
              </h3>
              <h3 className=" text-[20px] font-semibold">
                Course Level : {row?.courseId?.level}
              </h3>
              <h3 className=" text-[20px] font-semibold">
                Course Price : {row?.courseId?.price}
              </h3>
              <h3 className=" text-[20px] font-semibold">
                Course Review : {row?.courseId?.reviews.length}
              </h3>
              <div className="mt-5 flex items-center gap-4">
                <div className=" w-[80px] h-[80px] overflow-hidden rounded-full flex items-center justify-center">
                  <Image
                    src={
                      row?.userId?.avater ? row?.userId?.avater : "/user.png"
                    }
                    width={100}
                    height={100}
                    alt="user"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div>
                  <h3 className=" text-[20px] font-semibold">
                    Name : {row?.userId?.name}
                  </h3>
                  <h3 className=" text-[20px] font-semibold">
                    Email : {row?.userId?.email}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 md:block hidden">
            <p className=" text-text text-base font-medium ">{row?.courseId?.description}</p>
          </div>
        </div>
      </NewModal>
    </>
  );
};

export default ViewOrder;
