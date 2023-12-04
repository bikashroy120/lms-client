import Loader2 from "@/app/utils/Loader2/Loader2";
import Table from "@/app/utils/Table";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import React from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

type Props = {
  course: any;
  isLoading: boolean;
};

const CourseTable = ({ course, isLoading }: Props) => {
  const router = useRouter()
  const columns = [
    {
      name: "Image",
      selector: (row: any) => <>
        <Image src={row?.thumbnail} width={50} height={50} alt="logo" className=" w-[40px] h-[40px] rounded-md"/>
      </>,
      width:"100px"
    },
    {
      name: "ID",
      selector: (row: any) => row?._id,
    },
    {
      name: "Course Title",
      selector: (row: any) => row?.name,
      width:"430px"
    },
    {
      name: "Rating",
      selector: (row: any) => row?.rating,
    },
    {
      name: "Purchased",
      selector: (row: any) => row?.purchased,
    },
    // {
    //   name: "Created At",
    //   selector: (row: any) => row.age,
    // },
    {
      name: "Action",
      width:"140px",
      cell: (row: any) => (
        <>
          <div className=" flex flex-row items-center gap-5">
            {/* <button><HiOutlineViewfinderCircle /></button> */}
            <button onClick={()=>handelEdit(row._id)}  className=" text-[20px] hover:text-green-500">
              <AiFillEdit />
            </button>
            <button className=" text-[20px] hover:text-red-500">
              <AiTwotoneDelete />
            </button>
          </div>
        </>
      ),
    },
  ];

  const handelEdit = (id:any)=>{
    router.push(`/admin/course/edit-course/${id}`)
  }

  return <div className=" w-full flex items-center justify-center">
      {
        isLoading ? <div className="py-5"><Loader2/> </div> : <Table columns={columns} data={course}/>
      }
  </div>;
};

export default CourseTable;
