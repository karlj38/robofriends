import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import type { Robot } from "#/types";

// Define a service using a base URL and expected endpoints
const robotsAPI = createApi({
  reducerPath: "robotsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getRobots: builder.query<Robot[], void>({
      query: () => "users",
    }),
    getRobotById: builder.query<Robot, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export default robotsAPI;

// Export hooks for usage in functional components
export const {
  useGetRobotsQuery,
  useGetRobotByIdQuery,
  util: { getRunningQueriesThunk },
} = robotsAPI;

// export endpoints for use in SSR
export const { getRobotById, getRobots } = robotsAPI.endpoints;
