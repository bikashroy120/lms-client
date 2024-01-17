"use client";

import { Badge, Popover, Tooltip } from "antd";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useGetAllQuery } from "@/redux/features/notficition/notificationApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "timeago.js";
import { useUpdateMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa6";
import { useMediaQuery } from "@react-hook/media-query";
import { useDispatch, useSelector } from "react-redux";
import { addMobile } from "@/redux/features/auth/authSlice";

type Props = {};

const AdminNav = (props: Props) => {
  const { data: notification, refetch } = useGetAllQuery("", {
    refetchOnMountOrArgChange: true,
  });
  const {mobile} = useSelector((state:any)=>state.auth)
  const dispatch = useDispatch()
  const router = useRouter();
  const [update, { isError, isSuccess, isLoading, data, error }] =
    useUpdateMutation();
    const isSmallScreen = useMediaQuery('(max-width: 767px)');


    useEffect(()=>{
      dispatch(addMobile(false))
    },[isSmallScreen])
  

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "login success";
      toast.success(message);
      refetch();
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        console.log(error);
      }
    }
  }, [isSuccess, error]);

  const updateNotification = async (item: any) => {
    const id = item._id;
    await update(id);
    router.push(item?.path);
  };

  const mobileSidbar = ()=>{
    dispatch(addMobile(mobile ? false :true))
  }

  const content = (
    <div className=" ">
      <div className="md:w-[408px] w-[100%]">
        <div className="w-full px-1 py-4 flex items-center justify-between gap-2">
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
          <div className=" flex flex-col gap-3">
            {notification?.notification?.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => updateNotification(item)}
                className=" bg-gray-300 p-2 rounded-lg cursor-pointer"
              >
                <div className=" flex items-start gap-3">
                  <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                    <Image
                      src={item?.user?.avater}
                      width={60}
                      height={60}
                      alt="user"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className=" w-[88%]">
                    <div className=" flex items-center justify-between">
                      <h2 className=" text-text text-[18px] font-semibold">
                        {item?.title}
                      </h2>
                      <span>{format(item?.createdAt)}</span>
                    </div>
                    <p className=" text-base text-lightText font-medium">
                      {item?.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------here notification data filter and show ------- */}
        {/* <Notification filterNotificationData={filterNotificationData} role={role} /> */}
      </div>
    </div>
  );

  return (
    <div className="w-full h-[80px] bg-white shadow-lg">
      <div className="flex items-center justify-between md:px-10 px-3 h-full">
        <div>
          <button onClick={()=>mobileSidbar()} className=" text-[20px] md:hidden block"><FaBars /></button>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <Popover content={content} placement="bottomRight" trigger="click">
              <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black py-2 md:px-0 px-5">
                <Badge
                  size="small"
                  count={notification?.notification.length}
                  offset={[-7, 4]}
                  className="mt-1"
                >
                  <Icon
                    icon="basil:notification-solid"
                    className=" text-light-black text-[25px]"
                  />
                </Badge>
              </button>
            </Popover>
          </div>
          <button className=" bg-primary text-white w-[100px] py-2 rounded-lg">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
