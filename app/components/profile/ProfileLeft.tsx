import Image from "next/image";
import React from "react";
import {RiLockPasswordLine} from "react-icons/ri"
import {SiCoursera} from "react-icons/si"
import {AiOutlineLogout} from "react-icons/ai"

type Props = {
  active: number;
  user: any;
  setActive:(active:number)=>void;
  logOutFunction:()=>void;
};

const ProfileLeft = ({ active, user,setActive,logOutFunction }: Props) => {
  return (
    <div className=" bg-white shadow-md rounded-md h-[500px] overflow-hidden">
      <button onClick={()=>setActive(1)} className={`flex hover:bg-slate-500 py-3 px-5 items-center gap-3 cursor-pointer 800px:w-[300px] w-[80px] ${active === 1 ? "bg-slate-500" : " bg-transparent"}`}>
        <Image
          src={user?.avater ? user?.avater : "/user.png"}
          width={50}
          height={50}
          alt="logo"
          className="w-[30px] h-[30px] rounded-full"
        />
        <h2 className=" dark:text-white font-semibold hidden 800px:flex text-black">
          My Account
        </h2>
      </button>
      <button onClick={()=>setActive(2)} className={`flex hover:bg-slate-500 py-3 dark:text-white font-semibold text-black px-5 items-center gap-3 cursor-pointer 800px:w-[300px] w-[80px] ${active === 2 ? "bg-slate-500" : " bg-transparent"}`}>
        <RiLockPasswordLine size={20}/>
        <h2 className=" dark:text-white hidden 800px:flex font-semibold text-black">
          Change Password
        </h2>
      </button>
      <button onClick={()=>setActive(3)} className={`flex hover:bg-slate-500 py-3 dark:text-white font-semibold text-black px-5 items-center gap-3 cursor-pointer 800px:w-[300px] w-[80px] ${active === 2 ? "bg-slate-500" : " bg-transparent"}`}>
        <SiCoursera size={20}/>
        <h2 className=" dark:text-white hidden 800px:flex font-semibold text-black">
          Enrolled Courses
        </h2>
      </button>
      <button onClick={()=>logOutFunction()} className={`flex hover:bg-slate-500 py-3 dark:text-white font-semibold text-black px-5 items-center gap-3 cursor-pointer 800px:w-[300px] w-[80px] ${active === 2 ? "bg-slate-500" : " bg-transparent"}`}>
        <AiOutlineLogout size={20}/>
        <h2 className=" dark:text-white hidden 800px:flex font-semibold text-black">
          Log Out
        </h2>
      </button>

    </div>
  );
};

export default ProfileLeft;
