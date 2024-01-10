
import AdminAllUser from "@/app/components/admin/user/AdminAllUser";
import AdminLayout from "@/app/components/layout/AdminLayout";
import React from "react";

type Props = {};

const User = (props: Props) => {
  return (
    <AdminLayout>
        <div>
          <h2 className=" font-semibold text-[25px]">All User</h2>
          <AdminAllUser/>
        </div>
    </AdminLayout>
  );
};

export default User;
