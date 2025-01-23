import { useState, useEffect } from 'react';
import '../styles/landingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate('/home');
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className='landing-page'>
      <div className='app-name'>Visual Symphony</div>
      <div className='percentage-text'>{percentage}%</div>
      <div className='percentage-bar' style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default LandingPage;
