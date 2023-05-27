const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
    const stars = Math.round(rating);
  
    const getStarIcon = (filled) => (filled ? '★' : '☆');
  
    return (
      <div className="driver-card">
        <img src={img} alt={name} />
        <div className="driver-info">
          <h2>{name}</h2>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>{getStarIcon(index < stars)}</span>
            ))}
          </div>
          <p>
            {model} - {licensePlate}
          </p>
        </div>
      </div>
    );
  };
  
  export default DriverCard;