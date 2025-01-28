import { Dropdown, DropdownToggle } from 'react-bootstrap';
import { CiMenuBurger } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  return (
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
            <Dropdown.Item onClick={() => navigate('/authentication')}>
              Log in | Register
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/favourites')}>
              Your favourites{' '}
            </Dropdown.Item>
            <Dropdown.Item href='#/action-3'>
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
  );
};

export default NavBar;
