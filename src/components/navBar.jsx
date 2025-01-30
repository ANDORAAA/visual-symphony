import { Dropdown, DropdownToggle } from 'react-bootstrap';
import { CiMenuBurger } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return location.pathname !== '/' ? (
    <div className='nav-bar'>
      <h5>Visual Symphony</h5>
      <div>
        <Dropdown>
          <DropdownToggle
            variant='secondary-outline'
            className='hamburger-menu'
          >
            <CiMenuBurger />
          </DropdownToggle>

          <Dropdown.Menu>
            {/* Pass state to trigger modal */}
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
