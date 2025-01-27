import '../styles/centuries.css';

const CenturyTimeline = ({ centuries, onCenturyClick }) => (
  <div className='century-timeline'>
    {centuries.map((century) => (
      <div
        key={century}
        className='century'
        onClick={() => onCenturyClick(century)}
      >
        {century}
      </div>
    ))}
  </div>
);

export default CenturyTimeline;
