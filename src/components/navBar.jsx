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
              Find paintings by artist or title
            </Dropdown.Item>
            <Dropdown.Item href='#/action-4'>
              Find paintings by their medium
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/centuries')}>
              Find paintings by century
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  ) : null;
};

export default NavBar;
