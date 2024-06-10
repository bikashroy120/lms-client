import {apiSlice} from "../api/apiSlice";

export const layoutApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        updateLayout:builder.mutation({
            query:(data)=>({
                url:"layout/update",
                method:"PUT",
                body:data,
            })
        }),
        getLayout:builder.query({
            query:(query:any)=>({
                url:`layout/get-data?${query}`,
                method:"GET",
            })
        }),
        adminLayout:builder.query({
            query:(query:any)=>({
                url:`/admin-analutics?${query}`,
                method:"GET",
            })
        }),
        adminOrder:builder.query({
            query:(query:any)=>({
                url:`/order-analutics?${query}`,
                method:"GET",
            })
        }),
        deleteLayout: builder.mutation({
            query: (id) => ({
              url: `layout/delete-order/${id}`,
              method: "DELETE",
            }),
          }),
    })
})


export const {useGetLayoutQuery,useUpdateLayoutMutation,useAdminLayoutQuery,useAdminOrderQuery} = layoutApi;