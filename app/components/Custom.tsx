"use client"


import React from "react";
import Loader from "./Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

type Props = {
  children: React.ReactNode;
};

const Custom = ({ children }: Props) => {
  const { isLoading } = useLoadUserQuery({});
  return <>{isLoading ? <div><Loader /></div> : <>{children}</>}</>;
};

export default Custom;
