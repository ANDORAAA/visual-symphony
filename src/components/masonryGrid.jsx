import { useContext, useEffect } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworks } from '../services/api';
import '../styles/masonryGrid.css';

const MasonryGrid = () => {

  const { artworks, setArtworks, currentPage, setTotalPages, setSpinner } = useContext(Ctx);

  const noImgsInCol = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchArtworks();
      setArtworks(data.data);
      setTotalPages(data.pagination.total_pages);
      setSpinner(false);
    };
    setSpinner(true);
    fetchData();
  }, [currentPage]);


  const renderMasonryGrid = (list) => {
    const res = []
    let colItems = []
    list.forEach((item, index) => {
      if(index%noImgsInCol === 0 && index > 0){
        res.push(<div>{colItems}</div>);
        colItems = [];
      } 
      else {
        colItems.push( <img
          key={item.id}
          src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
          alt={item.title}
        />)
      }
    })
    return res;
  }

  return (
    <div className='masonry-grid'>
      {artworks && renderMasonryGrid(artworks)}
    </div>
  );
};

export default MasonryGrid;
