import React from 'react';
import { Review } from '@/app/interfaces/interface';
import StarRating from "@/app/components/StarRating"

interface Props {
  reviews: Review[];
}

const ReviewList: React.FC<Props> = ({ reviews }) => {
  return (
    <div className="flex justify-end px-2.5">
    <div className="w-full md:w-5/6 lg:w-11/12 xl:w-8/12 2xl:w-11/12">
      {reviews.map((review) => (
        <div
          key={review.id}
          className='border p-4 my-2.5'
        >
          <h3 className='font-bold text-lg'>
            {review.author} <span className="text-gray-500"> {review.date}</span>
          </h3>
          <div className="flex items-center mt-2">
          <StarRating rating={review.rating} />
          </div>
          <p className="mt-2 text-gray-700">{review.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};
export default ReviewList;