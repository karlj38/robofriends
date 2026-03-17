import type { Robot } from "#/types";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "#/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

// Define a service using a base URL and expected endpoints
const robotsAPI = createApi({
  reducerPath: "robotsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
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
