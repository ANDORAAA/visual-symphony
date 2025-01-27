import { useContext } from 'react';
import { Ctx } from '../context/store';
import { Spinner } from 'react-bootstrap';
import '../styles/loader.css';

const Loader = ({global=true}) => {
  const { spinner } = useContext(Ctx);

  return spinner ? (
    <div className={global ? 'loader-wrapper' : ''}>
      <Spinner animation='border' role='status' id='loader'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  ) : null;
};

export default Loader;
