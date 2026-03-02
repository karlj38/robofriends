import { wrapper } from "#/redux/store";
import {
  getRobots,
  getRunningQueriesThunk,
  useGetRobotsQuery,
} from "#/redux/services/robotsService";
import { filterRobots } from "#/utils/app-utils";
import { CardList, Loader, Scroll, Search } from "#/components";
import { useAppSelector } from "#/redux/hooks";
import { getSearchTerm } from "#/redux/slices/searchSlice";

export default function Home() {
  const { data: robots, error, isLoading } = useGetRobotsQuery();
  const searchTerm = useAppSelector(getSearchTerm);

  if (isLoading) return <Loader />;
  if (error) return <h1 className="f1">Something went wrong</h1>;

  const filteredRobots = filterRobots(robots, searchTerm);

  return (
    <>
      <Search />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getRobots.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);
