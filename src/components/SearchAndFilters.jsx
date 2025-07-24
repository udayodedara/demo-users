const SearchAndFilters = ({ search, setSearch }) => {
  return (
    <div>
      <div className="bg-blue-700 flex p-2 justify-between">
        <div className="text-white"> All</div>
        <div>
          <input
            type="text"
            className="bg-amber-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
