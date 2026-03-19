// "use cache";
import { Profile } from "#/components";
import { Robot } from "#/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: Promise<{ id: number }>;
};

const getRobot = cache(async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) notFound();

  return (await res.json()) as Robot;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const robot = await getRobot(id);

  return {
    title: robot.name,
  };
}

export default async function RobotPage({ params }: Props) {
  const { id } = await params;
  const robot = await getRobot(id);

  return <Profile robot={robot} />;
}
