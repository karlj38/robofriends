import { CardList, Scroll, Search } from "#/components";
import type { Robot } from "#/types";
import { Suspense } from "react";

export default async function HomePage() {
  // "use cache";

  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });
  const robots = (await data.json()) as Robot[];

  return (
    <>
      <Search />
      <Scroll>
        <CardList robots={robots} />
      </Scroll>
    </>
  );
}
