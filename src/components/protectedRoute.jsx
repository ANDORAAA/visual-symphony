import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ctx } from '../context/store';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(Ctx);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return user ? children : null;
};

export default ProtectedRoute;
