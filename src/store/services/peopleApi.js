// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Globals from "../../constants/Globals";

// Define a service using a base URL and expected endpoints
export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: Globals.API }),
  endpoints: (builder) => ({
    getPersonById: builder.query({
      query: (id) => `people/${id}`,
    }),
    getPeople: builder.query({
      query: () => `people`,
    }),
    updatePerson: builder.mutation({
      query: ({ id, patch }) => ({
        url: `people/${id}`,
        body: patch,
        method: "PATCH",
      }),
    }),
    deletePerson: builder.mutation({
      query: (id) => ({
        url: `people/${id}`,
        method: "DELETE",
      }),
    }),
    addPerson: builder.mutation({
      query: (post) => ({
        url: `people/`,
        body: post,
        method: "POST",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPersonByIdQuery,
  useGetPeopleQuery,
  useUpdatePersonMutation,
  useDeletePersonMutation,
  useAddPersonMutation,
} = peopleApi;
