import AddCourses from "@/app/components/admin/courses/AddCourses";
import AdminLayout from "@/app/components/layout/AdminLayout";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <AdminLayout>
        <div>
            <AddCourses/>
        </div>
    </AdminLayout>
  );
};

export default Page;
