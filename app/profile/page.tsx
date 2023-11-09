"use client"

import { useState } from "react";
import React from 'react'
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ProfileLeft from "../components/profile/ProfileLeft";

type Props = {}

const Profile = (props: Props) => {
    const [open,setOpen] = useState(false)
    const [activeItem,setActiveItem] = useState(0)
    const [route,setRoute] = useState("Login")
    const [active,setActive] = useState(1)
    const {user} = useSelector((state:any)=>state.auth)

  return (
    <div>
        < Header open={open} setOpen={setOpen} route={route} setRoute={setRoute} activeItem={activeItem}/>
        <div className=" flex item w-[90%] mx-auto py-10 ">
            <ProfileLeft active={active} user={user} setActive={setActive}/> 
        </div>
    </div>
  )
}

export default Profile