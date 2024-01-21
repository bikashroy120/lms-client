"use client";

import React from "react";
import CarStatsChart from "../charts/CarStatsChart";
import { useAdminOrderQuery } from "@/redux/features/layout/layoutApi";
import Loader2 from "@/app/utils/Loader2/Loader2";

type Props = {};

const AdminChart = (props: Props) => {
  const { data, isLoading } = useAdminOrderQuery("");

  console.log("=========", data?.course?.last12Month);

  return (
    <div className=" w-full bg-white shadow-md rounded-lg p-5">
      <div className=" pb-5">
        <h2 className=" text-text text-[25px] font-bold">Course Order Chart</h2>
      </div>

      <div className=" h-[500px] w-full">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <Loader2 />
          </div>
        ) : (
          <>
            <CarStatsChart data={data?.course?.last12Month}/>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminChart;
