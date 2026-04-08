import { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface StarRatingProps {
  productId: number;
  rating: number;
  onRate: (productId: number, rating: number) => void;
}

export default function StarRating({ productId, rating, onRate }: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const { darkMode } = useTheme();

  const displayRating = hoveredStar || rating;

  return (
    <div className="flex items-center" role="group" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(productId, star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
          className={`p-1 cursor-pointer transition-transform duration-150 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
          aria-label={`Rate ${star} out of 5 stars`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill={star <= displayRating ? '#F59E0B' : 'none'}
            stroke={star <= displayRating ? '#F59E0B' : darkMode ? '#6B7280' : '#9CA3AF'}
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}
