import UserModal from "./UserModal";
import { useState } from "react";

const UserList = ({ list = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  if (list.length <= 0) {
    return <div>No users to display</div>;
  }

  const handleClickUser = (user) => {
    setIsModalOpen(true);
    setSelectedUser(user);
  };

  return (
    <div>
      {list.map((item) => {
        return (
          <button
            key={item.id}
            className="flex items-center gap-2 my-2"
            onClick={() => handleClickUser(item)}
          >
            <div className="h-[25px] w[25px]">
              <img className="h-full w-full" src={item.image} />
            </div>
            <div className="flex items-start flex-col">
              <div>{`${item.firstName} ${item.lastName} `}</div>
              <div className="opacity-50">{item.email}</div>
            </div>
          </button>
        );
      })}
      {selectedUser && (
        <UserModal
          selectedUser={selectedUser}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserList;
