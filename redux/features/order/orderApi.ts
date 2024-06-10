import {apiSlice} from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(data)=>({
                url:"order/create",
                method:"POST",
                body:data,
            })
        }),
        getAllOrder:builder.query({
            query:(query:any)=>({
                url:`order/all-order?${query}`,
                method:"GET",
            })
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
              url: `order/delete-order/${id}`,
              method: "DELETE",
            }),
          }),
    })
})


export const {useCreateOrderMutation,useGetAllOrderQuery,useDeleteOrderMutation} = orderApi;