import { useContext, useEffect } from 'react';
import { Ctx } from '../context/store';
import Login from '../components/login';
import Register from '../components/register';
import '../styles/authentication.css';

const Authentication = () => {
  const { hasAccount, setHasAccount } = useContext(Ctx);

  useEffect(() => {
    setHasAccount(true);
  }, []);

  return (
    <div className='authentication-wrapper'>
      {hasAccount ? <Login /> : <Register />}
    </div>
  );
};

export default Authentication;
