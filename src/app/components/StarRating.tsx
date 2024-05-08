
// Визначте інтерфейс для властивостей компонента StarRating
interface StarRatingProps {
  rating: number;
}

// Оновіть компонент StarRating, щоб він приймав 'rating' як властивість
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // визначаємо, чи є половина зірки
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-green-500">★</span>
      ))}
      {halfStar > 0 && (
        <span key={fullStars} className="text-green-500">☆</span> // половина зірки
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index + fullStars + halfStar} className="text-gray-300">☆</span>
      ))}
    </div>
  );
};

export default StarRating;