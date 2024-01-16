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
import ChangePassword from "../components/profile/ChangePassword";
import EnrollCourse from "../components/profile/EnrollCourse";
import Container from "../utils/Container";

type Props = {};

const Profile = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(10);
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
    <div className=" bg-[#fafafa] w-full h-screen">
      <Protected>
        <div className=" bg-white h-[80px] relative">
          <Header
            open={open}
            setOpen={setOpen}
            route={route}
            setRoute={setRoute}
            activeItem={activeItem}
          />
        </div>
        <Container>
          <div className=" flex item w-full gap-5 py-10 ">
            <ProfileLeft
              active={active}
              user={user}
              setActive={setActive}
              logOutFunction={logOutFunction}
            />
            <div className=" w-[90%]">
              {active === 1 && <ProfileInfo user={user} />}
              {active === 2 && <ChangePassword user={user} />}
              {active === 3 && <EnrollCourse user={user} />}
            </div>
          </div>
        </Container>
      </Protected>
    </div>
  );
};

export default Profile;
