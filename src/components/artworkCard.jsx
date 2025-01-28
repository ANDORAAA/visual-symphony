import '../styles/centuries.css';

const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <div className='artwork-card' onClick={onClick}>
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title || 'Untitled'}
        loading='lazy'
      />
    </div>
  );
};

export default ArtworkCard;
