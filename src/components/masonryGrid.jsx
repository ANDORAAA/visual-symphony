import { useContext, useEffect } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworks } from '../services/api';
import '../styles/masonryGrid.css';

const MasonryGrid = () => {
  const { artworks, setArtworks, currentPage } = useContext(Ctx);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchArtworks();
      setArtworks(data.data);
    };
    fetchData();
  }, [currentPage, setArtworks, artworks]);

  return (
    <div className='masonry-grid'>
      {artworks?.map((artwork) => (
        <img
          key={artwork.id}
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
        />
      ))}
    </div>
  );
};

export default MasonryGrid;
