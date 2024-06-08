"use client";

import { useRegisterMutation } from "@/redux/features/auth/authApi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ResentOtp = () => {
  const { reSent } = useSelector((state: any) => state.auth);

  const [register, { isError, data, error, isSuccess, isLoading }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Register success";
      toast.success(message);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const onSubmit = async () => {
    if (!reSent) {
      toast.error("Please Go to sign up again");
    } else {
      await register(reSent);
    }
  };

  return (
    <div>
      <p className="text-center text-info text-sm font-medium mt-4">
        Didn't get the code?{" "}
        <button
          type="button"
          disabled={isLoading}
          onClick={() => onSubmit()}
          className={`font-bold underline ${
            isLoading ? " text-gray-500" : "text-primary "
          }`}
        >
          Click to resend
        </button>
      </p>
    </div>
  );
};

export default ResentOtp;
