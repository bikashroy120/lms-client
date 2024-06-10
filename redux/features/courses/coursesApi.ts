import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "course/create-course",
        method: "POST",
        body: data,
      }),
    }),
    getAllCourse: builder.query({
      query: (query: any) => ({
        url: `course/all-course?${query}`,
        method: "GET",
      }),
    }),
    getSingleCourse: builder.query({
      query: (query: any) => ({
        url: `course/${query}`,
        method: "GET",
      }),
    }),
    editCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `course/update-course/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `course/delete-course/${id}`,
        method: "DELETE",
      }),
    }),
    addQuestion: builder.mutation({
      query: (data) => ({
        url: `course/question-add`,
        method: "PUT",
        body: data,
      }),
    }),
    addAnswer: builder.mutation({
      query: (data) => ({
        url: `course/question-answer`,
        method: "PUT",
        body: data,
      }),
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: `course/add-review`,
        method: "PUT",
        body: data,
      }),
    }),
    answerReview: builder.mutation({
      query: (data) => ({
        url: `course/review-replay`,
        method: "PUT",
        body: data,
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
  useAddReviewMutation,
  useAnswerReviewMutation,
} = courseApi;
