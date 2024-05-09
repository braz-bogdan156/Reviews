import React, { useState, useCallback } from 'react';
import { Review } from '../interfaces/interface';
import loadMoreReviews from '../functions/LoadMoreReviews';

const ButtonPlusReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]); // початковий стан відгуків

  const [showButton, setShowButton] = useState<boolean>(true); // Стан для відображення кнопки

    // Функція для завантаження відгуків
  const handleLoadMoreReviews = useCallback(async () => {
    const newReviews = await loadMoreReviews();
    setReviews(prevReviews => [...prevReviews, ...newReviews]);
    if (newReviews.length === 0) {
      setShowButton(false); // Якщо нових відгуків немає, приховуємо кнопку
    }
  }, []);

  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Author: {review.author}</p>
          <p>Rating: {review.rating}</p>
          <p>{review.content}</p>
          <p>Date: {review.date}</p>
        </div>
      ))}
      <div className='flex justify-center'>
      <button className=' bg-gray-200  mt-4  px-3 py-2 rounded-full text-sm hover:bg-gray-300 font-medium  w-50' 
      onClick={handleLoadMoreReviews}>Показати ще</button>
      </div>
    </div>
  );
};

export default ButtonPlusReviews;