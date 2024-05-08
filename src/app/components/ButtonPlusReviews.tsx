import React, { useState } from 'react';
import { Review } from '../interfaces/interface';

const ButtonPlusReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]); // початковий стан відгуків

  // Функція для завантаження нових відгуків
  const loadMoreReviews = async () => {
    try {
      const response = await fetch('URL_сервера/відгуки'); // замініть URL_сервера на реальний URL
      const newReviews: Review[] = await response.json();
      setReviews(prevReviews => [...prevReviews, ...newReviews]); // додаємо нові відгуки до існуючих
    } catch (error) {
      console.error('Помилка при завантаженні відгуків:', error);
    }
  };

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
      <button onClick={loadMoreReviews}>Ще</button>
    </div>
  );
};

export default ButtonPlusReviews;