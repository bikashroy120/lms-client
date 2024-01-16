"use client";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import {
  usePasswordMutation,
  useUpdateMutation,
} from "@/redux/features/auth/authApi";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BiCamera } from "react-icons/bi";
import PasswordInput from "../ui/PasswordInput";

type Props = {
  user: any;
};

const ChangePassword = ({ user }: Props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password, { isLoading, isError, data, error, isSuccess }] =
    usePasswordMutation();

  const updateProfile = async () => {
    if (newPassword === "" || oldPassword === "" || confirm === "") {
      toast.error("please fill all data");
    } else {
      if (newPassword !== confirm) {
        toast.error("New Password and confirm Password Not match");
      }
    }

    await password({
      oldPassword,
      newPassword,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Password update success";
      toast.success(message)
      setOldPassword("")
      setNewPassword("")
      setConfirm("")
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

  return (
    <div>
      <div className=" flex items-center justify-center flex-col w-full gap-5 mt-10">
        <div className=" flex items-center flex-col 800px:w-[700px] w-full gap-5">
          <PasswordInput
            title="Old Password"
            value={oldPassword}
            onChange={(e: any) => setOldPassword(e.target.value)}
          />
          <PasswordInput
            title="New Password"
            value={newPassword}
            onChange={(e: any) => setNewPassword(e.target.value)}
          />
          <PasswordInput
            title="confirm Password"
            value={confirm}
            onChange={(e: any) => setConfirm(e.target.value)}
          />
          <div>
            <button
              onClick={() => updateProfile()}
              className="py-2 px-5 bg-purple-400 rounded-lg"
            >
              {isLoading ? "Loading.." : "submit"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
