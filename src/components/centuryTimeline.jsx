import '../styles/centuries.css';

const CenturyTimeline = ({ centuries, onCenturyClick, selectedCentury }) => (
  <div className='century-timeline'>
    {centuries?.map((century) => (
      <div
        key={century}
        className='century'
        style={
          selectedCentury === century ? { backgroundColor: '#a58282' } : {}
        }
        onClick={() => onCenturyClick(century)}
      >
        {century}
      </div>
    ))}
  </div>
);

export default CenturyTimeline;
