import { wrapper } from "#/redux/store";
import {
  getRobots,
  getRunningQueriesThunk,
  useGetRobotsQuery,
} from "#/redux/services/robotsService";
import { filterRobots } from "#/utils/app-utils";
import { CardList, ErrorBoundary, Header, Scroll } from "#/components";
import { useAppSelector } from "#/redux/hooks";
import { getSearchTerm } from "#/redux/slices/searchSlice";

export default function Home() {
  const { data: robots, error, isLoading } = useGetRobotsQuery();
  const searchTerm = useAppSelector(getSearchTerm);

  if (isLoading) return <h1 className="f1">Loading...</h1>;
  if (error) return <h1 className="f1">Something went wrong</h1>;

  const filteredRobots = filterRobots(robots, searchTerm);

  return (
    <>
      <Header />
      <main>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </main>
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
