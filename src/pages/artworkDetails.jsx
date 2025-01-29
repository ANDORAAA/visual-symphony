import { useContext } from 'react';
import { Ctx } from '../context/store';
import '../styles/artworkDetails.css';

const ArtworkDetails = () => {
  const { selectedArtwork } = useContext(Ctx);

  return (
    <div className='artwork-details-page'>
      <div className='img-wrapper'>
        <img
          src={`https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,/0/default.jpg`}
          alt={selectedArtwork.title || 'untitled'}
        />
      </div>

      <div className='details-wrapper'>
        {selectedArtwork.title && <h1>{selectedArtwork.title}</h1>}

        {selectedArtwork.artist_display && (
          <h3>{selectedArtwork.artist_display}</h3>
        )}

        {selectedArtwork.place_of_origin && selectedArtwork.date_display && (
          <h5>
            Created in {selectedArtwork.place_of_origin},{' '}
            {selectedArtwork.date_display}
            <hr />
          </h5>
        )}

        {selectedArtwork.medium_display && (
          <p>
            <strong>Medium: </strong>
            {selectedArtwork.medium_display}
          </p>
        )}

        {selectedArtwork.style_title && (
          <p>
            <strong>Style: </strong>
            {selectedArtwork.style_title}
          </p>
        )}

        {selectedArtwork.dimensions && (
          <p>
            <strong>Dimensions: </strong>
            {selectedArtwork.dimensions}
            <hr />
          </p>
        )}

        {selectedArtwork.description && <p>{selectedArtwork.description}</p>}
      </div>
    </div>
  );
};

export default ArtworkDetails;
