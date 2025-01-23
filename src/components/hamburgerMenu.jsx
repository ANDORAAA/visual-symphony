import { Dropdown, DropdownToggle } from 'react-bootstrap';
import '../styles/hamburgerMenu.css';

const HamburgerMenu = () => {
  return (
    <div>
      <Dropdown>
        <DropdownToggle variant='dark' className='hamburger-menu'>
          <svg
            width='1.5rem'
            height='1.5rem'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 18L20 18'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M4 12L20 12'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M4 6L20 6'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </DropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HamburgerMenu;
