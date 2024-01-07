import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "course/create-course",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllCourse: builder.query({
      query: (query: any) => ({
        url: `course/all-course?${query}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getSingleCourse: builder.query({
      query: (query: any) => ({
        url: `course/${query}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    editCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `course/update-course/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `course/delete-course/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    addQuestion: builder.mutation({
      query: (data) => ({
        url: `course/question-add`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    addAnswer: builder.mutation({
      query: (data) => ({
        url: `course/question-answer`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllCourseQuery,
  useGetSingleCourseQuery,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useAddQuestionMutation,
  useAddAnswerMutation,
} = courseApi;
