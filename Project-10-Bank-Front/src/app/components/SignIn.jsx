import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/userActions';

function SignIn () {
  const dispatch = useDispatch();
  
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };
    loginUser(body, dispatch);
  };

  return (
    <section className="box-border bg-white w-[90%] max-w-[300px] mx-auto mt-8 md:mt-12 p-6 md:p-8">
        <i className="fa fa-user-circle text-4xl md:text-5xl"></i>        
        <h1 className="my-4 md:my-[20px] text-xl md:text-2xl font-bold">Sign In</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-left mb-3 md:mb-4">
            <label className="font-bold" htmlFor="email">Username</label>
            <input 
              className="p-2 md:p-[5px] text-base md:text-xl border-1 border-solid"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="flex flex-col text-left mb-3 md:mb-4">
            <label className="font-bold" htmlFor="password">Password</label>
            <input             
              className="p-2 md:p-[5px] text-base md:text-xl border-1 border-solid"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="flex">
            <input className='cursor-pointer' type="checkbox" id="remember-me" />
            <label className="ml-[0.25rem] cursor-pointer" htmlFor="remember-me">Remember me</label>
          </div>
          <button        
            className="block w-full p-2 md:p-2.5 text-base md:text-lg font-bold mt-3 md:mt-4 border border-[#00bc77] bg-[#00bc77] text-white cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Chargement...' : 'Sign In'}
          </button>
        </form>
    </section>
  );
}

export default SignIn;