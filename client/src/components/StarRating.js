import React from 'react';

const StarRating = ({ rating, onRatingChange, interactive = false }) => {
  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (value) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'active' : ''}`}
          onClick={() => handleStarClick(star)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </span>
      ))}
      {interactive && (
        <span className="text-secondary ml-2" style={{ fontSize: '0.875rem' }}>
          {rating} out of 5
        </span>
      )}
    </div>
  );
};

export default StarRating; 