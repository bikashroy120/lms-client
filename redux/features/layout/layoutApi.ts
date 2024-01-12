import {apiSlice} from "../api/apiSlice";

export const layoutApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        updateLayout:builder.mutation({
            query:(data)=>({
                url:"layout/update",
                method:"PUT",
                body:data,
                credentials:"include" as const,
            })
        }),
        getLayout:builder.query({
            query:(query:any)=>({
                url:`layout/get-data?${query}`,
                method:"GET",
                credentials:"include" as const,
            })
        }),
        deleteLayout: builder.mutation({
            query: (id) => ({
              url: `layout/delete-order/${id}`,
              method: "DELETE",
              credentials: "include" as const,
            }),
          }),
    })
})


export const {useGetLayoutQuery,useUpdateLayoutMutation} = layoutApi;