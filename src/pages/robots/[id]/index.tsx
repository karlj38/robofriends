import { Loader, Profile } from "#/components";
import {
  getRobotById,
  getRunningQueriesThunk,
  useGetRobotByIdQuery,
} from "#/redux/services/robotsService";
import { wrapper } from "#/redux/store";
import { Robot } from "#/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RobotPage() {
  const { id: idParam } = useParams<{ id: string }>();
  const router = useRouter();
  const id = parseInt(idParam);
  const {
    data: robot,
    error,
    isLoading,
  } = useGetRobotByIdQuery(id) as {
    data: Robot;
    error: FetchBaseQueryError;
    isLoading: boolean;
  };

  useEffect(() => {
    if (!robot || error) {
      if (error?.status === 404) {
        router.push("/404");
      } else {
        throw error;
      }
    }
  }, [error]);

  if (isLoading) return <Loader />;
  if (!robot) return null;

  return <Profile robot={robot} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const idParam = context.params?.id;

    if (typeof idParam === "string") {
      const id = parseInt(idParam);
      store.dispatch(getRobotById.initiate(id));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);
