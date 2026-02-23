import { useAppDispatch } from "#/redux/hooks";
import { setSearchTerm } from "#/redux/slices/searchSlice";

export default function Search() {
  const dispatch = useAppDispatch();
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchTerm(event.target.value));

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
