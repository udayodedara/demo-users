import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  removeFromFav,
  removeUser,
} from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const UserModal = ({ open, onClose, selectedUser }) => {
  const { firstName, lastName, image, email } = selectedUser;
  const [isInFav, setIsInFav] = useState(false);
  const { favUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("favUsers", favUsers);
    if (favUsers.length > 0) {
      const isAvailable = favUsers.find((item) => item === selectedUser.id);
      console.log("isAvailable", isAvailable);
      setIsInFav(isAvailable);
    }
  }, [favUsers, selectedUser]);

  const handleAddToFav = () => {
    dispatch(addToFav(selectedUser.id));
  };

  const handleRemoveFromFav = () => {
    dispatch(removeFromFav(selectedUser.id));
  };

  const handleRemoveUser = () => {
    dispatch(removeUser(selectedUser.id));
    onClose();
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className="min-h-[50vh] w-[80vh] bg-white m-auto my-[10vh] p-5">
          <div className="border-b-2 flex justify-between py-1">
            <div className="font-bold">User Details</div>
            <div onClick={onClose} className="font-bold cursor-pointer">
              X
            </div>
          </div>
          <div className="flex py-1 gap-1">
            <button
              onClick={() => navigate("/favorites")}
              className="flex-1 bg-blue-500 p-1 text-white"
            >
              Go to favorite list
            </button>
            {isInFav ? (
              <button
                className="flex-1 bg-red-500 p-1 text-white"
                onClick={handleRemoveFromFav}
              >
                Remove from favorite
              </button>
            ) : (
              <button
                className="flex-1 bg-green-500 p-1 text-white"
                onClick={handleAddToFav}
              >
                Add to favorite
              </button>
            )}
          </div>
          <div className="flex flex-col">
            <div className="h-[70px]">
              <img
                className="h-[70px] w-full rounded-e-full"
                src={image}
                alt=""
              />
            </div>
            <div className="flex justify-center mt-[-40px]">
              <img
                className="shadow-2xl h-[80px] w-[80px] rounded-[100%]"
                src={image}
                alt=""
              />
            </div>
            <div className="text-center text-2xl font-bold py-2">
              {`${firstName} ${lastName}`}
            </div>
            <div className="text-[12px] opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </div>
            <div className="flex justify-center py-2">
              <div className="flex-1 text-center">location</div>
              <div className="flex-1 text-center">email</div>
            </div>
            <div className="border-t-1 flex">
              <div className="flex flex-1 flex-col justify-center border-r-1">
                <div className="text-center">8100</div>
                <div className="text-center">followers</div>
              </div>
              <div className="flex flex-1 flex-col justify-center border-l-1">
                <div className="text-center">3211</div>
                <div className="text-center">followings</div>
              </div>
            </div>
            <div className="mt-1">
              <button className="p-3 bg-green-500 text-white w-full">
                FOLLOW
              </button>
            </div>
            <div className="mt-1">
              <button
                onClick={handleRemoveUser}
                className="p-3 bg-red-500 text-white w-full"
              >
                Remove User
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
