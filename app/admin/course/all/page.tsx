"use client"


import AdminLayout from "@/app/components/layout/AdminLayout";
import Table from "@/app/utils/Table";
import React from "react";

type Props = {};

const Page = (props: Props) => {

  const data = [
    {
      name:"bikash",
      roll:120,
      age:20
    },
    {
      name:"bikash2",
      roll:120,
      age:20
    },
    {
      name:"bikash3",
      roll:120,
      age:20
    },
  ]


  const columns = [
    {
      name:"Name",
      selector: (row:any) => row.name,
    },
    {
      name:"Roll",
      selector: (row:any) => row.roll,
    },
    {
      name:"Age",
      selector: (row:any) => row.age,
    },
  ]

  return (
    <AdminLayout>
        <div>
          <Table columns={columns} data={data}/>
        
        </div>
    </AdminLayout>
  );
};

export default Page;
