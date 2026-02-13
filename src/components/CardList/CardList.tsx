import type { Robot } from "../../types";
import { Card } from "..";

export default function CardList({ robots }: { robots: Robot[] }) {
  return (
    <>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </>
  );
}
