import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import AdminProtected from "../components/hooks/useAdminProtected";

type Props = {};

const page = (props: Props) => {
  return (
    <AdminLayout>
      {/* <AdminProtected> */}
        <div>hello</div>
      {/* </AdminProtected> */}
    </AdminLayout>
  );
};

export default page;
