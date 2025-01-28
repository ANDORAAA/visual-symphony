import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Ctx } from '../context/store';
import '../styles/modal.css';

const Modal = ({ selectedArtwork, setSelectedArtwork }) => {
  // const { selectedArtwork, setSelectedArtwork } = useContext(Ctx);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/artworkdetails');
  };

  const closeModal = () => setSelectedArtwork(null);

  return (
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='close-btn' onClick={closeModal}>
          <IoCloseOutline />
        </button>
        <img
          src={`https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,/0/default.jpg`}
          alt={selectedArtwork.title}
        />
        <div className='artwork-details'>
          {selectedArtwork.title && <h1>{selectedArtwork.title}</h1>}

          {selectedArtwork.artist_display && (
            <h4>{selectedArtwork.artist_display}</h4>
          )}

          {selectedArtwork.place_of_origin && selectedArtwork.date_display && (
            <p>
              Created in {selectedArtwork.place_of_origin},{' '}
              {selectedArtwork.date_display}
            </p>
          )}

          {selectedArtwork.short_description && (
            <p>{selectedArtwork.short_description}</p>
          )}
          <span className='more-details' onClick={handleLearnMore}>
            Click here to learn more about this painting
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
