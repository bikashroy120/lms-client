import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import AdminProtected from "../components/hooks/useAdminProtected";

type Props = {};

const Page = (props: Props) => {
  return (
    <AdminLayout>
      <AdminProtected>
        <div>hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam optio recusandae illum eligendi dolorem nemo voluptas expedita eum possimus quisquam.</div>
      </AdminProtected>
    </AdminLayout>
  );
};

export default Page;
