import {apiSlice} from "../api/apiSlice";

export const notificationApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        update:builder.mutation({
            query:(id)=>({
                url:`/notifaction/${id}`,
                method:"PUT",
                body:{},
            })
        }),
        getAll:builder.query({
            query:(query:any)=>({
                url:`/notifaction`,
                method:"GET",
            })
        }),
    })
})


export const {useGetAllQuery,useUpdateMutation} = notificationApi;