import type { Robot } from "#/types";

export function filterRobots(
  robots: Array<Robot> | undefined,
  searchTerm: string,
): Array<Robot> {
  if (!robots) return [];

  return robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm),
  );
}
