import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ctx } from '../context/store';
import Login from '../components/login';
import Register from '../components/register';
import { IoHomeOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import '../styles/authentication.css';

const Authentication = () => {
  const { hasAccount, setHasAccount } = useContext(Ctx);

  useEffect(() => {
    setHasAccount(true);
  }, []);

  return (
    <div className='authentication-wrapper'>
      <div className='btns'>
        <Link to='/home'>
          <IoHomeOutline
            style={{
              color: '#fff',
              position: 'absolute',
              top: '0.1rem',
              left: '0.1rem',
              fontSize: '1.4rem',
              margin: '1rem',
            }}
          />
        </Link>
        <Link to='/favourites'>
          <IoHeartOutline
            style={{
              color: '#fff',
              position: 'absolute',
              top: '0.1rem',
              right: '0.1rem',
              fontSize: '1.4rem',
              margin: '1rem',
            }}
          />
        </Link>
      </div>
      {hasAccount ? <Login /> : <Register />}
    </div>
  );
};

export default Authentication;
