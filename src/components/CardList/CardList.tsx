import styles from "./CardList.module.css";
import { Card } from "..";
import Link from "next/link";
import type { Robot } from "#/types";

export default function CardList({ robots }: { robots: Array<Robot> }) {
  return (
    <>
      {robots.map((robot) => {
        return (
          <Link
            key={robot.id}
            href={`/robots/${robot.id}`}
            className={styles.cardLink}
          >
            <Card key={robot.id} robot={robot} />;
          </Link>
        );
      })}
    </>
  );
}
