import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Ctx } from '../context/store';
import '../styles/loader.css';

function Loader() {

  const { spinner } = useContext(Ctx);
    return (
      spinner ? <div className='loader-wrapper'>
        <Spinner animation="border" role="status" id="loader">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> : null
    );
  }
  
  export default Loader;