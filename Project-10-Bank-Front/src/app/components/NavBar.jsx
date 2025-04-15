import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authSlice"; 
import argentBankLogo from '../../assets/argentBankLogo.webp';

function Navbar() {
  const dispatch = useDispatch();


  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const user = useSelector((state) => state.auth.user);


  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex justify-between px-[20px] py-[5px] items-center">
      <Link to="/">
        <img className="w-[200px] max-w-full" src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>

      {isAuthenticated ? (
        <div className="flex items-center font-bold gap-2">
          <Link to="/profile" className="flex items-center">
          <i className="fa fa-user-circle px-2"></i>
          <p className="px-2">{user?.firstName}</p>
          </Link>
          <button onClick={handleLogout} className="px-2 cursor-pointer">
          <i className="fa fa-sign-out px-2"></i>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/sign-in">
          <div className="flex items-center font-bold">
            <i className="fa fa-user-circle px-2"></i>
            <p>Sign In</p>
          </div>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;