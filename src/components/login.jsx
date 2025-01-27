import { useContext } from 'react';
import { Ctx } from '../context/store';
import { CiUser, CiLock } from 'react-icons/ci';

const Login = () => {
  const { hasAccount, setHasAccount } = useContext(Ctx);

  const handleRedirect = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className='authentication'>
      <form>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <CiUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required></input>
          <CiLock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox'></input>Remember me
          </label>
          <a href='#'>Forgot password?</a>
        </div>
        <button type='submit'>Log in</button>
        <div className='register-link'>
          <p>
            Don't have an account?{' '}
            <span onClick={() => handleRedirect()}>Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
