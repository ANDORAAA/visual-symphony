import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworksByMovement } from '../services/api';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import Modal from '../components/modal';
import PaginationControls from '../components/paginationControls';
import '../styles/artisticMovements.css';

const ArtisticMovements = () => {
  const {
    artworks,
    setArtworks,
    spinner,
    setSpinner,
    currentPage,
    setCurrentPage,
    setTotalPages,
    selectedArtwork,
    setSelectedArtwork,
    artisticMovements,
  } = useContext(Ctx);

  const [selectedMovement, setSelectedMovement] = useState(null);

  useEffect(() => {
    setArtworks([]);
    const loadArtworks = async () => {
      setSpinner(true);
      try {
        const res = await fetchArtworksByMovement(
          selectedMovement,
          currentPage
        );
        setTotalPages(res.pagination.total_pages);

        const artworksData = res.data.map((artwork) => ({
          id: artwork.id,
          image_id: artwork.image_id,
          title: artwork.title,
          artist_display: artwork.artist_display,
          place_of_origin: artwork.place_of_origin,
          short_description: artwork.short_description || ' ',
          date_display: artwork.date_display,
          description: artwork.description,
          medium_display: artwork.medium_display,
          style_title: artwork.style_title,
          dimensions: artwork.dimensions,
        }));

        setArtworks(artworksData);
      } catch (error) {
        console.error('Error loading artworks:', error);
      }
      setSpinner(false);
    };

    if (selectedMovement) loadArtworks();
  }, [selectedMovement, currentPage]);

  return (
    <>
      <div className='artistic-movements-wrapper'>
        <h3>
          Select an artistic movement or style to view public domain paintings
          from the Art Institute of Chicago's collection from that artistic
          tradition.
        </h3>
        <div className='movements-list'>
          {artisticMovements.map((movement) => (
            <button
              key={movement}
              className='movement'
              style={
                selectedMovement === movement
                  ? {
                      backgroundColor: '#fff',
                      color: '#333',
                    }
                  : {}
              }
              onClick={() => {
                setSelectedMovement(movement);
                setCurrentPage(1);
              }}
            >
              {movement}
            </button>
          ))}
        </div>

        <div className='d-flex flex-column mt-3' style={{ maxHeight: '90vh' }}>
          {artworks.length > 0 && <PaginationControls />}
          {spinner ? (
            <Loader />
          ) : (
            <div className='artworks-wrapper'>
              {artworks.length > 0 &&
                artworks.map((artwork) => (
                  <ArtworkCard
                    key={artwork.id}
                    artwork={artwork}
                    onClick={() => setSelectedArtwork(artwork)}
                  />
                ))}
            </div>
          )}
        </div>

        {selectedArtwork && (
          <Modal
            selectedArtwork={selectedArtwork}
            setSelectedArtwork={setSelectedArtwork}
          />
        )}
      </div>
    </>
  );
};

export default ArtisticMovements;
