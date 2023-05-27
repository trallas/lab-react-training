const Rating = ({ children }) => {
    const filledStars = Math.ceil(children);
    const emptyStars = 5 - filledStars;
  
    return (
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index}>★</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index}>☆</span>
        ))}
      </div>
    );
  };
  
  export default Rating;