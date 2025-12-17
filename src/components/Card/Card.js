export default function Card({ robot: { email, id, name } }) {
  return (
    <div className="bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
