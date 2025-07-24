import { useEffect, useState } from "react";
import UserList from "../../components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../store/reducers/userSlice";
import SearchAndFilters from "../../components/SearchAndFilters";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.user);
  const [searchParam, setSearchParam] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    fetchUserList();
  }, []);

  useEffect(() => {
    if (searchParam) {
      let tempList = [];
      list.forEach((user) => {
        if (
          user.firstName.toLowerCase().includes(searchParam) ||
          user.lastName.toLowerCase().includes(searchParam)
        ) {
          tempList.push(user);
        }
      });

      if (activeFilter !== "all") {
        tempList = tempList.filter((user) => user.gender === activeFilter);
      }

      setFilteredList(tempList);
    } else {
      if (activeFilter !== "all") {
        const tempList = list.filter((user) => user.gender === activeFilter);
        setFilteredList(tempList);
        return;
      }
      setFilteredList(list);
    }
  }, [searchParam, list, activeFilter]);

  const fetchUserList = async () => {
    const res = await fetch("https://dummyjson.com/users?limit=10");
    const data = await res.json();
    console.log("data", data);
    dispatch(addUsers(data.users));
    setFilteredList(data.users);
  };

  return (
    <div className="flex gap-2 flex-col">
      <div>
        <div className="text-3xl font-bold">User Details</div>
      </div>
      <div className="flex">
        <span className="bg-blue-400 ms-auto py-1 px-3">
          <Link to="/favorites" className="text-white">
            Go to favorite list
          </Link>
        </span>
      </div>
      <SearchAndFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        setSearch={setSearchParam}
        search={searchParam}
      />
      <UserList list={filteredList} />
    </div>
  );
};

export default Home;
