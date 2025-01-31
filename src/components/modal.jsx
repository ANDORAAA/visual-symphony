import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IoCloseOutline,
  IoTrashOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import { Ctx } from '../context/store';
import '../styles/modal.css';

const Modal = ({ selectedArtwork, setSelectedArtwork }) => {
  const navigate = useNavigate();
  const { addToFavourites, removeFromFavourites, favourites } = useContext(Ctx);

  const closeModal = () => setSelectedArtwork(null);

  const isFavorite = favourites.some((fav) => fav.id === selectedArtwork.id);

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
          <h1>{selectedArtwork.title}</h1>
          <h4>{selectedArtwork.artist_display}</h4>
          <p>
            Created in {selectedArtwork.place_of_origin},{' '}
            {selectedArtwork.date_display}
          </p>
          <p
            className='more-details'
            onClick={() => navigate('/artworkdetails')}
            style={{ textDecoration: 'underline' }}
          >
            Learn more about this painting
          </p>

          {isFavorite ? (
            <p
              onClick={() => removeFromFavourites(selectedArtwork.id)}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              Remove from Favorites <IoTrashOutline />
            </p>
          ) : (
            <p
              onClick={() => addToFavourites(selectedArtwork)}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              Save to Favorites <IoHeartOutline />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
