import { MenuItem, Select } from "@mui/material";

const SearchAndFilters = ({
  search,
  setSearch,
  setActiveFilter,
  activeFilter,
}) => {
  return (
    <div>
      <div className="bg-blue-700 flex p-2 justify-between">
        <div className="text-white">
          <Select
            label="Filter"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            sx={{ color: "white" }}
            size="small"
            variant="outlined"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </div>
        <div>
          <input
            type="text"
            className="bg-amber-50 h-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
