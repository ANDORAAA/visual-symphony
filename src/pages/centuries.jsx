import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchAllArtworksForCenturies } from '../services/api';
import CenturyTimeline from '../components/centuryTimeline';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import Modal from '../components/modal';
import PaginationControls from '../components/paginationControls';
import '../styles/centuries.css';

const Centuries = () => {
  const {
    artworks,
    setArtworks,
    centuries,
    spinner,
    setSpinner,
    currentPage,
    setCurrentPage,
    setTotalPages,
    selectedArtwork,
    setSelectedArtwork,
  } = useContext(Ctx);

  const [selectedCentury, setSelectedCentury] = useState(null);

  useEffect(() => {
    setArtworks([]);
    const loadAllArtworks = async () => {
      setSpinner(true);
      try {
        const res = await fetchAllArtworksForCenturies(
          selectedCentury,
          currentPage
        );
        setTotalPages(res.data.pagination.total_pages);

        const artworksData = res.data.data.map((artwork) => {
          const date_display =
            artwork.date_end ||
            artwork.date_display?.match(/\d{4}(?!.*\d{4})/)?.[0];          
            
          return {
            id: artwork.id,
            image_id: artwork.image_id,
            title: artwork.title,
            artist_display: artwork.artist_display,
            place_of_origin: artwork.place_of_origin,
            // year: year ? Number(year) : null,
            short_description: artwork.short_description || ' ',
            date_display: date_display ? Number(date_display) : null,
            description: artwork.description,
            medium_display: artwork.medium_display,
            style_title: artwork.style_title,
            dimensions: artwork.dimensions

          };
        });

        setArtworks(artworksData);
      } catch (error) {
        console.error('Error loading artworks:', error);
      }
      setSpinner(false);
    };

    if (selectedCentury) loadAllArtworks();
  }, [selectedCentury, currentPage]);

  const handleCenturyClick = (century) => {
    setSelectedCentury(century);
    setCurrentPage(1);
  };

  console.log({artworks})

  return (
    <>
      <div className='centuries-page-wrapper'>
        <h3>
          Select a century to view public domain paintings from the Art
          Institute of Chicago's collection from that time period.
        </h3>
        <div className='century-timeline'>
          <CenturyTimeline
            centuries={centuries}
            onCenturyClick={handleCenturyClick}
            selectedCentury={selectedCentury}
          />
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

export default Centuries;
