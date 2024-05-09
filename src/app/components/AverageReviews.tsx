import React, { useState, useEffect } from 'react';
import StarRating from "@/app/components/StarRating";
import { Review } from '@/app/interfaces/interface';

interface AverageReviewsProps {
    reviews: Review[];
}

export const AverageReviews: React.FC<AverageReviewsProps> = ({ reviews }) => {
    const [averageRating, setAverageRating] = useState<number>(0);

    useEffect(() => {
        const totalRating = reviews.reduce((sum: number, review: Review) => sum + review.rating, 0);
        setAverageRating(parseFloat((totalRating / reviews.length).toFixed(1)));
    }, [reviews]);

    return (
        <div className=' p-4 border-2 '>
            <p className='text-5xl font-bold'> {averageRating}</p>
            
                <StarRating rating={averageRating} />
            
            <p>на основі <strong>{reviews.length}</strong> відгуків</p>
        </div>
    );
};