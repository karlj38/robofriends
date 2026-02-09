import { useDispatch } from "react-redux";
import { setSearch } from "../../slices/searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const onSearchChange = (event) => dispatch(setSearch(event.target.value));

  return (
    <div className="pa2">
      <input
        id="search"
        className="pa3 ba b--green bg-lightest-blue tc"
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
}
