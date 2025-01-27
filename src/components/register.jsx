import { useContext } from 'react';
import { Ctx } from '../context/store';
import { CiUser, CiLock, CiMail } from 'react-icons/ci';

const Register = () => {
  const { hasAccount, setHasAccount } = useContext(Ctx);

  const handleRedirect = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className='authentication'>
      <form>
        <h1>Register</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <CiUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Email address' required />
          <CiMail className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required></input>
          <CiLock className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Confirm password'
            required
          ></input>
          <CiLock className='icon' />
        </div>
        <button type='submit'>Register</button>
        <div className='register-link'>
          <p>
            Have an account?{' '}
            <span onClick={() => handleRedirect()}>Log in</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
