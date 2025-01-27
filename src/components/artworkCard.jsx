import '../styles/centuries.css';

const ArtworkCard = ({ artwork }) => {
  return (
    <div className='artwork-card'>
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title || 'Untitled'}
      />
      {/* {artwork.title && <h3>{artwork.title}</h3>}

      {artwork.artist && <h5>{artwork.artist}</h5>}

      {artwork.origin && artwork.year && (
        <p>
          Created in {artwork.origin}, {artwork.year}
        </p>
      )} */}
    </div>
  );
};

export default ArtworkCard;
