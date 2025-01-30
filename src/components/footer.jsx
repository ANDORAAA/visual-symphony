import { useLocation } from "react-router-dom";


const Footer = () => {
  
  const location = useLocation();

  return location.pathname !== '/' ? (
    <footer className='footer'>
      <p>
        Crafted with passion by Andrea Bardos, this web application invites art
        lovers to explore and immerse themselves in the beauty and stories
        behind each painting.
      </p>
      <p>
        Data and images are sourced from the
        <a
          href='https://api.artic.edu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          &nbsp;Art Institute of Chicago API
        </a>
        .
      </p>
      <p>
        {' '}
        Please visit their main website here:{' '}
        <a
          href='https://www.artic.edu'
          target='_blank'
          rel='noopener noreferrer'
        >
          &nbsp;https://www.artic.edu
        </a>
        .
      </p>
    </footer>
  ) : null;
};

export default Footer;
