import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchAndFilters from "../../components/SearchAndFilters";
import UserList from "../../components/UserList";
import { useSelector } from "react-redux";

const Favorite = () => {
  const [usersList, setUsersList] = useState([]);
  const { favUsers, list } = useSelector((state) => state.user);
  const [searchParam, setSearchParam] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (list.length > 0 && favUsers.length > 0) {
      const tempList = favUsers.map((userId) => {
        return list.find((item) => item.id === userId);
      });

      setUsersList(tempList);
      setFilteredList(tempList);
    }
  }, [list, favUsers]);

  useEffect(() => {
    if (searchParam) {
      const tempList = [];
      usersList.forEach((user) => {
        if (
          user.firstName.toLowerCase().includes(searchParam) ||
          user.lastName.toLowerCase().includes(searchParam)
        ) {
          tempList.push(user);
        }
      });
      setFilteredList(tempList);
    } else {
      setFilteredList(usersList);
    }
  }, [usersList, searchParam]);

  return (
    <div className="flex gap-2 flex-col">
      <div>
        <div className="text-3xl font-bold">Favorite user list</div>
      </div>
      <div className="flex">
        <span className="bg-blue-400 ms-auto py-1 px-3">
          <Link to="/home" className="text-white">
            Go to home
          </Link>
        </span>
      </div>
      <SearchAndFilters setSearch={setSearchParam} search={searchParam} />
      <UserList list={filteredList} />
    </div>
  );
};

export default Favorite;
