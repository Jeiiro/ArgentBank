import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/userActions"; 

function HeaderProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
 
  const handleChangeFirstName = (e) => setFirstName(e.target.value);
  const handleChangeLastName = (e) => setLastName(e.target.value);
  
  const handleSave = async () => {
    if (!token) {
        console.error("Token manquant, impossible de mettre à jour l'utilisateur.");
        return;
    }
    dispatch(updateUser(firstName, lastName, token)); 
    setIsEditing(false);
  };
 
  const handleCancel = () => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setIsEditing(false);
  };

  return (
    <div className="text-white mb-6 md:mb-[2rem]">
      <h1 className="text-xl md:text-[2rem] font-bold m-3 md:m-4">
        Welcome back {isEditing ? "" : `${user?.firstName} ${user?.lastName}`}
      </h1>

      {isEditing ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mb-4">
            <input
              type="text"
              value={firstName}
              onChange={handleChangeFirstName}
              className="border p-2 w-[200px] text-black text-center bg-gray-300 rounded"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
              className="border p-2 w-[200px] text-black text-center bg-gray-300 rounded"
              placeholder="Last Name"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              className="border border-[#00bc77] bg-[#00bc77] text-base font-bold p-2 md:p-2.5 rounded-xl w-[100px]"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="border border-[#ff0000] bg-[#ff0000] text-base font-bold p-2 md:p-2.5 rounded-xl w-[100px]"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="border border-[#00bc77] bg-[#00bc77] text-base font-bold p-2 md:p-2.5"
        >
          Edit Name
        </button>
      )}
    </div>
  );
}

export default HeaderProfile;