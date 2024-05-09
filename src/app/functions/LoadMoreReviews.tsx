import { Review } from "../interfaces/interface";

// Функція для завантаження нових відгуків
 const loadMoreReviews = async (): Promise<Review[]>  => {
    try {
      const response = await fetch('URL_сервера/відгуки'); // потрібно буде замінити демонстраційний URL_сервера на реальний URL
      const newReviews: Review[] = await response.json();
     return newReviews;
    } catch (error) {
      console.error('Помилка при завантаженні відгуків:', error);
      return [];
    }
  };
 export default loadMoreReviews;