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
    <nav className="flex flex-wrap justify-between px-3 py-2 md:px-5 md:py-[5px] lg:px-[20px] items-center">
      <Link to="/" className="flex items-center">
        <img className="w-[150px] md:w-[180px] lg:w-[200px] max-w-full" src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>

      {isAuthenticated ? (
        <div className="flex items-center font-bold text-sm md:text-base gap-1 md:gap-2">
          <Link to="/profile" className="flex items-center hover:underline">
            <i className="fa fa-user-circle px-1 md:px-2"></i>
            <p className="px-1 md:px-2">{user?.firstName}</p>
          </Link>
          <button onClick={handleLogout} className="px-1 md:px-2 cursor-pointer hover:underline flex items-center">
            <i className="fa fa-sign-out px-1 md:px-2"></i>
            <span>Sign Out</span>
          </button>
        </div>
      ) : (
        <Link to="/sign-in" className="hover:underline">
          <div className="flex items-center font-bold text-sm md:text-base">
            <i className="fa fa-user-circle px-1 md:px-2"></i>
            <p>Sign In</p>
          </div>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;