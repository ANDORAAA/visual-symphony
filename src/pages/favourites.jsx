import { useContext, useState } from 'react';
import { Ctx } from '../context/store';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import Modal from '../components/modal';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';

const Favourites = () => {
  const { favourites, spinner, selectedArtwork, setSelectedArtwork } =
    useContext(Ctx);

  const favouritesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(favourites.length / favouritesPerPage);
  const currentArtworks = favourites.slice(
    (currentPage - 1) * favouritesPerPage,
    currentPage * favouritesPerPage
  );

  return (
    <div className='d-flex flex-column mt-3'>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Your Favourites</h2>
      {spinner ? (
        <Loader />
      ) : (
        <>
          {totalPages > 1 && (
            <div className='d-flex justify-content-center align-items-center mt-3'>
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
                style={{ border: 'none', background: 'transparent' }}
              >
                <CiCircleChevLeft />
              </button>
              <span>
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
                style={{ border: 'none', background: 'transparent' }}
              >
                <CiCircleChevRight />
              </button>
            </div>
          )}
          <div className='artworks-wrapper'>
            {currentArtworks.length > 0 ? (
              currentArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              ))
            ) : (
              <p>No favorites yet.</p>
            )}
          </div>
        </>
      )}
      {selectedArtwork && (
        <Modal
          selectedArtwork={selectedArtwork}
          setSelectedArtwork={setSelectedArtwork}
        />
      )}
    </div>
  );
};

export default Favourites;
