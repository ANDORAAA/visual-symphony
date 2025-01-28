import '../styles/centuries.css';

const CenturyTimeline = ({ centuries, onCenturyClick, selectedCentury }) => (
  <div className='century-timeline'>
    {centuries?.map((century) => (
      <div
        key={century}
        className='century'
        style={
          selectedCentury === century
            ? { backgroundColor: '#fff', color: '#333', border: 'none' }
            : {}
        }
        onClick={() => onCenturyClick(century)}
      >
        {century}
      </div>
    ))}
  </div>
);

export default CenturyTimeline;
