import { Ctx } from '../context/store';
import { useContext } from 'react';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';
import '../styles/paginationControls.css';


const PaginationControls = () => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(Ctx);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  return (
    <div className='pagination-controls'>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        <CiCircleChevLeft />
      </button>
      <span>{`${currentPage} | ${totalPages}`}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <CiCircleChevRight />
      </button>
    </div>
  );
};

export default PaginationControls;
