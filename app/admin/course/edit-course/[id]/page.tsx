import EditCourse from "@/app/components/admin/courses/EditCourse";
import AdminLayout from "@/app/components/layout/AdminLayout";
import React from "react";

type Props = {};

const EditPage = ({params}: any) => {

    const id = params?.id;

  return (
    <AdminLayout>
        <div>
            <EditCourse id={id}/>
        </div>
    </AdminLayout>
  );
};

export default EditPage;
