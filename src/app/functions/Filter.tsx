import { Review } from "../interfaces/interface";
import { reviews } from "@/app/test/test"
export const Filter = (
  array: Review[],
  filterParam: string
): Review[] | undefined => {
  console.log("Вибране значення фільтра:", filterParam);

  if (filterParam === "Спочатку найкращі") {
    reviews.filter((review) => review.rating >= 4 && review.rating <= 5);
    array.sort((a, b) => b.rating - a.rating);
  } else if (filterParam === "Найгірші") {
    reviews.filter((review) => review.rating >= 1 && review.rating <= 3);
    array.sort((a, b) => a.rating - b.rating);
  }

  console.log("Відфільтровані та відсортовані відгуки:", array);
  return array;
};