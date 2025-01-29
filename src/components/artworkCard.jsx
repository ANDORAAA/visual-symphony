import { useState } from 'react';
import '../styles/centuries.css';
import Image from './image';

const ArtworkCard = ({ artwork, onClick }) => {
  const [error, setError] = useState(false);
  return (
    <div 
    className='artwork-card' 
    onClick={onClick} 
    style={error ? {visibility: 'hidden', width: 0, height: 0, overflow: 'hidden'} : {}}>
      <Image
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title || 'Untitled'}
        loading='lazy'
        onError={() => setError(true)}
      />
    </div>
  );
};

export default ArtworkCard;
