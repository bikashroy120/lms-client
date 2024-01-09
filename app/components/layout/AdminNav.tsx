"use client"

import { Badge, Popover, Tooltip } from "antd";
import React from "react";
import { Icon } from '@iconify/react';
import { useGetAllQuery } from "@/redux/features/notficition/notificationApi";
import { useRouter } from "next/navigation";

type Props = {};

const AdminNav = (props: Props) => {

  const {data:notification,refetch} = useGetAllQuery("")
    const router = useRouter()
console.log("Notification ======= ",notification?.notification)




    const content = (
        <div className=" ">
          <div className="md:w-[408px] w-[100%]">
            <div className="w-full px-5 py-4 flex items-center justify-between gap-2">
              <h2 className="text-[22px] font-medium text-text-primary">
                Notifications
              </h2>
              <Tooltip placement="left" title={"Mark as read"}>
              <Icon
                icon="radix-icons:envelope-open"
                className="text-[23px] text-secondary cursor-pointer"
              />
              </Tooltip>
            </div>
            <div>
                <div>
                    {
                        notification?.notification?.map((item:any,index:number)=>(
                            <div key={index}>
                                <div>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    
            {/* -------------------------here notification data filter and show ------- */}
            {/* <Notification filterNotificationData={filterNotificationData} role={role} /> */}
          </div>
        </div>
      );



  return (
    <div className="w-full h-[80px] bg-white shadow-lg">
      <div className="flex items-center justify-between px-10 h-full">
        <div></div>
        <div>
          <Popover content={content} placement="bottomRight" trigger="click">
            <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black py-2 md:px-0 px-5">
              <Badge
                size="small"
                count={4}
                offset={[-7, 4]}
                className="mt-1"
              >
                <Icon
                  icon="basil:notification-solid"
                  className=" text-light-black text-[25px]"
                />
              </Badge>
              <span className=" flex md:hidden">Notification</span>
            </button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
