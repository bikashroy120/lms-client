import {apiSlice} from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createContact: builder.mutation({
            query: (data) => ({
              url: "contact/post",
              method: "POST",
              body: data,
              credentials: "include" as const,
            }),
          }),
          getAllContact: builder.query({
            query: (query: any) => ({
              url: `contact/all-get?${query}`,
              method: "GET",
              credentials: "include" as const,
            }),
          }),
          deleteContact: builder.mutation({
            query: (id) => ({
              url: `contact/contact-delete/${id}`,
              method: "DELETE",
              credentials: "include" as const,
            }),
          }),
    })
})


export const {useCreateContactMutation,useGetAllContactQuery,useDeleteContactMutation} = contactApi;