"use client";

import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import AdminProtected from "../components/hooks/useAdminProtected";
import AdminCard from "../components/admin/admin/AdminCard";
import { FaBookOpenReader, FaDollarSign } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import AdminChart from "../components/admin/admin/AdminChart";
import { useAdminLayoutQuery } from "@/redux/features/layout/layoutApi";
import Loader from "../components/Loader/Loader";

type Props = {};

const Page = (props: Props) => {
  const { data, isLoading } = useAdminLayoutQuery("");

  console.log(data);

  const carValue = [
    {
      title: "Total Revenue",
      value: `$${data?.order}`,
      icon: <FaDollarSign />,
      className: "border-green-500 border-b-[5px] border-b-green-500",
      bg: "bg-green-500",
    },
    {
      title: "Total Enroll",
      value: `${data?.enroll}`,
      icon: <FaBookOpenReader />,
      className: "border-primary border-b-[5px] border-b-primary",
      bg: "bg-primary",
    },
    {
      title: "Total Students",
      value: `${data?.user}`,
      icon: <PiStudentBold />,
      className: "border-success border-b-[5px] border-b-success",
      bg: "bg-success",
    },
  ];

  return (
    <AdminLayout>
      {/* <AdminProtected> */}
      <div>
        {isLoading ? (
          <>
            <Loader/>
          </>
        ) : (
          <>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {carValue.map((item: any, index: number) => (
                <AdminCard data={item} key={index} />
              ))}
            </div>
          </>
        )}
        <div className=" mt-7">
          <AdminChart />
        </div>
      </div>
      {/* </AdminProtected> */}
    </AdminLayout>
  );
};

export default Page;
