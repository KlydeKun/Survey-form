import React from 'react';

interface StarButtonProps {
  ratingValue: number;
  currentRating: number;
  onRatingChange: (ratingValue: number) => void;
}

const StarButton: React.FC<StarButtonProps> = ({
  ratingValue,
  currentRating,
  onRatingChange,
}) => {
  const handleRating = () => {
    onRatingChange(ratingValue);
  };

  return (
    <button
      onClick={handleRating}
      className="focus:outline-none border-none cursor-pointer"
      aria-label={`Rate ${ratingValue} stars`}
    >
      <i
        className={`pi pi-star-fill ${
          ratingValue <= currentRating ? 'text-yellow-400' : 'text-gray-400'
        } transition-colors duration-200 text-2xl`}
      ></i>
    </button>
  );
};

export default StarButton;
