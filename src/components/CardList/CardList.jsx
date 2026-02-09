import { Card } from "../";

export default function CardList({ robots }) {
  if (!robots) throw new Error("No robots");

  return (
    <>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </>
  );
}
