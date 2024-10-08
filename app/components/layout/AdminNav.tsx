"use client";

import { Badge, Popover, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useGetAllQuery, useUpdateNotMutation } from "@/redux/features/notficition/notificationApi";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "timeago.js";
import {
  useLogoutQuery,
  useUpdateMutation,
} from "@/redux/features/auth/authApi";
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
  const [logout, setLogout] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const logOutFunction = () => {
    setLogout(true);
    redirect("/");
  };
  const { mobile } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [updateNot, { isError, isSuccess, isLoading, data, error }] =
  useUpdateNotMutation();
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  console.log("error",error)

  useEffect(() => {
    dispatch(addMobile(false));
  }, [isSmallScreen]);

  useEffect(() => {
    if (isSuccess) {
      // const message = data?.message || "login success";
      // toast.success(message);
      refetch();
    }
    if (error) {
      if ("data" in error) {
        // const errorData = error as any;
        // toast.error(errorData.data.message);
      } else {
        console.log(error);
      }
    }
  }, [isSuccess, error]);

  const updateNotification = async (item: any) => {
    const id = item._id;
    await updateNot(id);
    // router.push(item?.path);
  };

  const mobileSidbar = () => {
    dispatch(addMobile(mobile ? false : true));
  };

  const content = (
    <div className=" ">
      <div className="md:w-[408px] w-[100%]">
        <div className="w-full px-1 py-4 flex items-center justify-between gap-2">
          <h2 className="text-[22px] font-medium text-text-primary">
            Notifications
          </h2>
          <Icon
            icon="radix-icons:envelope-open"
            className="text-[23px] text-secondary cursor-pointer"
          />
        </div>
        <div>
          <div className=" flex flex-col gap-3 max-h-[400px] overflow-y-scroll">
            {notification?.notification?.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => updateNotification(item)}
                className=" bg-gray-200 p-2 rounded-lg cursor-pointer"
              >
                <div className=" flex items-start gap-3">
                  <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                    <Image
                      src={item?.user?.avater ? item?.user?.avater : "/user.png"}
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

  const content2 = (
    <div>
      <button onClick={()=>logOutFunction()} className="py-2 px-8 text-[17px] font-medium hover:bg-gray-200 rounded-md">Logout</button>
    </div>
  )

  return (
    <div className="w-full h-[80px] bg-white shadow-lg">
      <div className="flex items-center justify-between md:px-10 px-3 h-full">
        <div>
          <button
            onClick={() => mobileSidbar()}
            className=" text-[20px] md:hidden block"
          >
            <FaBars />
          </button>
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
                    className=" text-light-black text-[30px]"
                  />
                </Badge>
              </button>
            </Popover>
          </div>
          {/* <button onClick={()=>logOutFunction()} className=" bg-primary text-white w-[100px] py-2 rounded-lg">
            Log Out
          </button> */}

          <div>
          <Popover content={content2} placement="bottomRight" trigger="click">
            {user?.avater && (
              <Image
                src={user?.avater ? user?.avater : "/user.png"}
                width={30}
                height={30}
                alt="user"
                className=" rounded-full min-w-max cursor-pointer"
              />
            )}
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
