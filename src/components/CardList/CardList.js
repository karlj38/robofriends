import Card from "../Card";

export default function CardList({ robots }) {
  return (
    <>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </>
  );
}
