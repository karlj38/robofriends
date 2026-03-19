"use client";
import type { Robot } from "../../types";

export default function Card({ robot: { email, id, name } }: { robot: Robot }) {
  return (
    <article className="bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
      <img
        alt="robots"
        fetchPriority="high"
        height="200"
        src={`https://robohash.org/${id}?size=200x200`}
        width="200"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </article>
  );
}
