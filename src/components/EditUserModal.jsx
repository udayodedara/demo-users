import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/reducers/userSlice";

const EditUserModal = ({ open, onClose, selectedUser, onSubmit }) => {
  const [data, setData] = useState({
    firstName: selectedUser?.firstName,
    lastName: selectedUser?.lastName,
    email: selectedUser?.email,
  });

  const dispatch = useDispatch();

  const handleUpdate = () => {
    console.log("data", data);
    const payload = {
      id: selectedUser.id,
      data,
    };
    dispatch(updateUser(payload));
    onClose();
    onSubmit();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <Modal key="user-edit-modal" open={open} onClose={onClose}>
        <div className="min-h-[50vh] w-[80vh] bg-white m-auto my-[10vh] p-5">
          <div className="border-b-2 flex justify-between py-1">
            <div className="font-bold">Edit User</div>
            <div onClick={onClose} className="font-bold cursor-pointer">
              X
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <label className="font-bold">First Name</label>
            <input
              id="firstName"
              onChange={(e) => handleChange(e)}
              type="text"
              className="border p-1"
              value={data.firstName}
            />
            <label className="font-bold">Last Name</label>
            <input
              id="lastName"
              onChange={(e) => handleChange(e)}
              type="text"
              className="border p-1"
              value={data.lastName}
            />
            <label className="font-bold">Email</label>
            <input
              id="email"
              onChange={(e) => handleChange(e)}
              type="email"
              className="border p-1"
              value={data.email}
            />
          </div>

          <div className="mt-1">
            <button
              onClick={handleUpdate}
              className="p-3 bg-green-500 text-white w-full"
            >
              Update User
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditUserModal;
