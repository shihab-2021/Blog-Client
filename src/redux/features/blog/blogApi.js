const { baseApi } = require("@/redux/api/baseApi");

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["blogs"],
    }),
    getSingleBlogDetails: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    addComment: builder.mutation({
      query: (commentData) => ({
        url: `/blogs/comment/${commentData.blogId}`,
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["blog", "comments"],
    }),
    getBlogComments: builder.query({
      query: (id) => ({
        url: `/blogs/comment/${id}`,
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
    addLike: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/like/${blogId}`,
        method: "POST",
      }),
      invalidatesTags: ["blog"],
    }),
    addDislike: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/dislike/${blogId}`,
        method: "POST",
      }),
      invalidatesTags: ["blog"],
    }),
    getAllBlog: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getBlogsByUser: builder.query({
      query: (userId) => ({
        url: `/blogs/userBlogs/${userId}`,
        method: "GET",
      }),
      providesTags: ["userBlogs"],
    }),
    updateBlog: builder.mutation({
      query: (blogData) => ({
        url: `/blogs/${blogData?.id}`,
        method: "PATCH",
        body: blogData?.data,
      }),
      invalidatesTags: ["blogs", "blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
    suspendBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/suspend/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["blogs", "allBlogs"],
    }),
    getAdminDashboardStats: builder.query({
      query: () => ({
        url: `/blogs/dashboard-stats`,
        method: "GET",
      }),
      providesTags: [],
    }),
    suspendComment: builder.mutation({
      query: (data) => ({
        url: `/blogs/comment-suspend/blog/${data?.blogId}/comment/${data?.commentId}`,
        method: "PUT",
      }),
      invalidatesTags: ["blogs", "blog"],
    }),
    getAllBlogForAdmin: builder.query({
      query: () => ({
        url: "/blogs/admin/blogs",
        method: "GET",
      }),
      providesTags: ["allBlogs"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetSingleBlogDetailsQuery,
  useAddCommentMutation,
  useGetBlogCommentsQuery,
  useAddLikeMutation,
  useAddDislikeMutation,
  useGetAllBlogQuery,
  useGetBlogsByUserQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useSuspendBlogMutation,
  useGetAdminDashboardStatsQuery,
  useSuspendCommentMutation,
  useGetAllBlogForAdminQuery,
} = blogApi;
