import {apiSlice} from "../api/apiSlice";


export const categoryApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createCategory:builder.mutation({
            query:(data)=>({
                url:"create-category",
                method:"POST",
                body:data,
                credentials:"include" as const,
            })
        }),
        getAllCategory:builder.query({
            query:()=>({
                url:"all-category",
                method:"GET",
                credentials:"include" as const,
            })
        })
    })
})


export const {useCreateCategoryMutation,useGetAllCategoryQuery} = categoryApi;