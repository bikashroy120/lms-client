"use client"


import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import AdminProtected from "../components/hooks/useAdminProtected";
import AdminCard from "../components/admin/admin/AdminCard";

type Props = {};

const Page = (props: Props) => {



  const carValue = [
    {
      title:"",
      value:"",
      icon:"",
      className:"",
    },
    {
      title:"",
      value:"",
      icon:"",
      className:"",
    },
    {
      title:"",
      value:"",
      icon:"",
      className:"",
    }
  ]


  return (
    <AdminLayout>
      {/* <AdminProtected> */}
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-7">
              {carValue.map((item:any,index:number)=>(
                <AdminCard data={item} key={index}/>
              ))}
            </div>
        </div>
      {/* </AdminProtected> */}
    </AdminLayout>
  );
};

export default Page;
