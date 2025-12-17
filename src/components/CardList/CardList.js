import Card from "../Card/Card";

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
}
