import { useGetAllOrderQuery } from '@/redux/features/order/orderApi';
import React from 'react'
import OrderTable from '../order/OrderTable';

type Props = {}

const AdminOrder = (props: Props) => {
    const {
        data: order,
        isError,
        isLoading,
        refetch,
      } = useGetAllOrderQuery("", { refetchOnMountOrArgChange: true });
  return (
    <div className=" mt-5 bg-white shadow-md rounded-lg">
        <h2 className='text-text text-[25px] font-bold py-4 px-5'>Resent Order</h2>
      <div className=" border-b w-full flex items-center justify-center">
        <OrderTable orders={order?.order} isLoading={isLoading} refetch={refetch}/>      
      </div>
    </div>
  )
}

export default AdminOrder