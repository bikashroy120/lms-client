"use client";

import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ProfileLeft from "../components/profile/ProfileLeft";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { redirect } from "next/navigation";
import Protected from "../components/hooks/useProtected";
import ProfileInfo from "../components/profile/ProfileInfo";

type Props = {};

const Profile = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  const [active, setActive] = useState(1);
  const [logout, setLogout] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const logOutFunction = () => {
    setLogout(true);
    redirect("/");
  };

  return (
    <div>
      <Protected>
        <Header
          open={open}
          setOpen={setOpen}
          route={route}
          setRoute={setRoute}
          activeItem={activeItem}
        />
        <div className=" flex item w-[90%] gap-5 mx-auto py-10 ">
          <ProfileLeft
            active={active}
            user={user}
            setActive={setActive}
            logOutFunction={logOutFunction}
          />
          <div className=" w-[90%]">{active === 1 && <ProfileInfo user={user}/>}</div>
        </div>
      </Protected>
    </div>
  );
};

export default Profile;
