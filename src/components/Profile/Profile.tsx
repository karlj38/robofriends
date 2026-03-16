import type { Robot } from "#/types";

export default function Profile({
  robot: { email, id, name, website },
}: {
  robot: Robot;
}) {
  return (
    <article className="bg-light-green dib br3 ma2 pa3 bw2 shadow-5">
      <img
        alt={`${name} profile`}
        fetchPriority="high"
        height="500"
        src={`https://robohash.org/${id}?size=500x500`}
        width="500"
      />
      <div>
        <h2>{name}</h2>
        <p>{website}</p>
        <p>{email}</p>
      </div>
    </article>
  );
}
