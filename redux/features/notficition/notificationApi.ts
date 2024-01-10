import {apiSlice} from "../api/apiSlice";

export const notificationApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        update:builder.mutation({
            query:(id)=>({
                url:`/notifaction/${id}`,
                method:"PUT",
                body:{},
                credentials:"include" as const,
            })
        }),
        getAll:builder.query({
            query:(query:any)=>({
                url:`/notifaction`,
                method:"GET",
                credentials:"include" as const,
            })
        }),
    })
})


export const {useGetAllQuery,useUpdateMutation} = notificationApi;