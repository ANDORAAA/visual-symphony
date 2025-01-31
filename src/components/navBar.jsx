import { useContext, useEffect } from 'react';
import { Ctx } from '../context/store';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from '../fbServices/fbAuth';
import { auth } from '../fbServices/fb';
import { Dropdown, DropdownToggle, Button } from 'react-bootstrap';
import { CiMenuBurger } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Ctx);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('>>>on auth state change>>>', user);
        setUser({ uid, email: user.email });
        navigate('/');
      } else {
        setUser(null);
        console.log('User is signed out');
      }
    });
  }, []);

  return location.pathname !== '/' ? (
    <div className='nav-bar'>
      <h5>Visual Symphony</h5>

      <div>
        {user && <span>{user.email}</span>}
        <Button variant='outline-secondary btn-sm' onClick={logout}>
          Logout
        </Button>
        <Dropdown>
          <DropdownToggle
            variant='secondary-outline'
            className='hamburger-menu'
          >
            <CiMenuBurger />
          </DropdownToggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => navigate('/home', { state: { view: 'login' } })}
            >
              Log in | Register
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/home')}>
              Home
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/favourites')}>
              Your favourites
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/search')}>
              Search paintings by artist or title
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/movements')}>
              Browse paintings by artistic movements and art styles
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/centuries')}>
              Discover paintings by century
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  ) : null;
};

export default NavBar;
