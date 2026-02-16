import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Robot } from "../../types";

// Define a service using a base URL and expected endpoints
const robotsAPI = createApi({
  reducerPath: "robotsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getRobots: builder.query<Robot[], void>({
      query: () => "users",
    }),
  }),
});

export default robotsAPI;

export const { useGetRobotsQuery } = robotsAPI;
