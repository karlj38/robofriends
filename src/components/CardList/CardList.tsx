"use client";
import styles from "./CardList.module.css";
import { Card } from "..";
import Link from "next/link";
import type { Robot } from "#/types";
import { filterRobots } from "#/utils/app-utils";
import { useAppSelector } from "#/redux/hooks";
import { getSearchTerm } from "#/redux/slices/searchSlice";

export default function CardList({ robots }: { robots: Array<Robot> }) {
  const searchTerm = useAppSelector(getSearchTerm);
  const filteredRobots = filterRobots(robots, searchTerm);

  return (
    <>
      {filteredRobots.map((robot) => {
        return (
          <Link
            key={robot.id}
            href={`/robots/${robot.id}`}
            className={styles.cardLink}
          >
            <Card key={robot.id} robot={robot} />
          </Link>
        );
      })}
    </>
  );
}
