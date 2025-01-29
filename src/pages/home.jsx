import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Login from '../components/login';
import Register from '../components/register';
import MasonryLayout from '../components/masonryLayout';
import PaginationControls from '../components/paginationControls';
import Loader from '../components/loader';
import '../styles/home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [authView, setAuthView] = useState('login');

  useEffect(() => {
    if (location.state?.view === 'login') {
      setAuthView('login');
      setShowModal(true);

      // Reset the location state to prevent reopening the modal on back navigation
      navigate('/home', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  return (
    <div className='home-wrapper'>
      <div className='hero-text'>
        <h2>Visual Symphony</h2>
        <h1>Your Visual Journey</h1>
      </div>

      <div className='content'>
        <PaginationControls />
        <MasonryLayout />
      </div>

      <Loader />

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className='dark-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {authView === 'login' ? 'Login' : 'Register'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {authView === 'login' ? <Login /> : <Register />}
        </Modal.Body>
        <Modal.Footer>
          {authView === 'login' ? (
            <p>
              Don't have an account?{' '}
              <span
                style={{
                  cursor: 'pointer',
                  color: '#333',
                  textDecoration: 'underline',
                }}
                onClick={() => setAuthView('register')}
              >
                Register
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span
                style={{
                  cursor: 'pointer',
                  color: '#333',
                  textDecoration: 'underline',
                }}
                onClick={() => setAuthView('login')}
              >
                Log in
              </span>
            </p>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
