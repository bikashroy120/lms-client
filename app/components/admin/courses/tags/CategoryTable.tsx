import Loader2 from "@/app/utils/Loader2/Loader2";
import Table from "@/app/utils/Table";
import { useDeleteCategoryMutation } from "@/redux/features/category/categoryApi";
import { useDeleteCourseMutation } from "@/redux/features/courses/coursesApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import swal from "sweetalert";
import EditCategory from "./EditCategory";

type Props = {
  course: any;
  isLoading: boolean;
  refetch: any;
};

const CategoryTable = ({ course, isLoading, refetch }: Props) => {
  const router = useRouter();
  const [deleteCategory, { error, isSuccess }] = useDeleteCategoryMutation();
  const [id,setId] = useState<string | null>(null)
  const [addOpen,setAddOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isSuccess) {
      swal("Successfully deleted!", {
        icon: "success",
      });
      refetch();
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        swal(errorData.data.message, {
          icon: "warning",
        });
      } else {
        console.log(error);
      }
    }
  }, [isSuccess, error]);

  const columns = [
    {
      name: "Image",
      selector: (row: any) => (
        <>
          <Image
            src={row?.image}
            width={50}
            height={50}
            alt="logo"
            className=" w-[40px] h-[40px] rounded-md"
          />
        </>
      ),
      width: "100px",
    },
    {
      name: "ID",
      selector: (row: any) => row?._id,
    },
    {
      name: "Category Title",
      selector: (row: any) => row?.title,

    },
    {
      name: "Description",
      selector: (row: any) => row?.description,
      width: "420px",
    },
    {
      name: "Action",
      width: "140px",
      cell: (row: any) => (
        <>
          <div className=" flex flex-row items-center gap-5">
            {/* <button><HiOutlineViewfinderCircle /></button> */}
            <button
              onClick={() => handelEdit(row._id)}
              className=" text-[20px] hover:text-green-500"
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => handelDelete(row._id)}
              className=" text-[20px] hover:text-red-500"
            >
              <AiTwotoneDelete />
            </button>
          </div>
        </>
      ),
    },
  ];

  const handelEdit = (id: any) => {
    setId(id)
    setAddOpen(true)
  };

  const handelDelete = async (id: any) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product.",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteItemFun(id);
      } else {
        swal("Course is safe!");
      }
    });
  };

  const deleteItemFun = async (id: any) => {
    console.log(id);
    await deleteCategory(id);
  };

  return (
    <div className=" w-full flex items-center justify-center">
      {isLoading ? (
        <div className="py-5">
          <Loader2 />{" "}
        </div>
      ) : (
        <Table columns={columns} data={course} />
      )}
      <EditCategory open={addOpen} setOpen={setAddOpen} refetch={refetch} id={id}/>
    </div>
  );
};

export default CategoryTable;
