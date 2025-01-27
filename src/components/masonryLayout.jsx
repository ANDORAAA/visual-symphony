import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworks } from '../services/api';
import { IoCloseOutline } from 'react-icons/io5';
import { CiMaximize1 } from 'react-icons/ci';
import '../styles/masonryLayout.css';

const MasonryLayout = () => {
  const { artworks, setArtworks, currentPage, setTotalPages, setSpinner } =
    useContext(Ctx);

  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);
      try {
        const data = await fetchArtworks(currentPage);
        setArtworks(data?.data || []);
        setTotalPages(data?.pagination?.total_pages || 1);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setSpinner(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const closeModal = () => setSelectedArtwork(null);

  return (
    <>
      <div className='masonry-layout'>
        {artworks?.map((artwork) => (
          <img
            key={artwork.id}
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            loading='lazy'
            onClick={() => setSelectedArtwork(artwork)}
          />
        ))}
      </div>

      {selectedArtwork && (
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

              {selectedArtwork.place_of_origin &&
                selectedArtwork.date_display && (
                  <p>
                    Created in {selectedArtwork.place_of_origin},{' '}
                    {selectedArtwork.date_display}
                  </p>
                )}

              {selectedArtwork.short_description && (
                <p>{selectedArtwork.short_description}</p>
              )}
              <div className='more-details'>
                Learn more about this painting
                <button>
                  <CiMaximize1 />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryLayout;
