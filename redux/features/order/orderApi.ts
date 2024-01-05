import {apiSlice} from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(data)=>({
                url:"order/create",
                method:"POST",
                body:data,
                credentials:"include" as const,
            })
        }),
        // getAllOrder:builder.query({
        //     query:(query:any)=>({
        //         url:`course/all-course?${query}`,
        //         method:"GET",
        //         credentials:"include" as const,
        //     })
        // }),
    })
})


export const {useCreateOrderMutation} = orderApi;