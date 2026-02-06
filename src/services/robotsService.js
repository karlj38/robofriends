import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const robotsAPI = createApi({
  reducerPath: "robotsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getRobots: builder.query({
      query: () => "users",
    }),
  }),
});

export default robotsAPI;

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRobotsQuery } = robotsAPI;
