export default function Search({ searchChange }) {
  return (
    <div className="pa2">
      <input
        id="search"
        className="pa3 ba b--green bg-lightest-blue tc"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
