'use client'
import { useState } from "react"
import ReviewList from "./components/ReviewList";
import { reviews } from "@/app/test/test"
import Select from "@/app/components/Select"
import { Review } from "./interfaces/interface";
import {AverageReviews} from "@/app/components/AverageReviews"
import ButtonPlusReviews from "./components/ButtonPlusReviews";

export default function Home() {
  const [filter, setFilter] = useState<string>('');
  const array: string[] = ['Спочатку найкращі', 'Найгірші'];
    const Filter=():Review[] | undefined=>{
     if(filter==='Спочатку найкращі'){
        return reviews.filter(review => review.rating >= 4 && review.rating <= 5);
      
     } else if(filter==='Найгірші')
     {
        
      reviews.filter(review => review.rating >= 1 && review.rating <= 3);
    } 
    
    };
     Filter();
    
    const [showButton, setShowButton] = useState<boolean>(true); // Стан для відображення кнопки
  return (

    <div>
      <AverageReviews reviews={reviews} ></AverageReviews>
      <Select value={filter} setValue={setFilter} array={array}></Select>
      <ReviewList reviews={reviews}></ReviewList>
      
      {showButton && <ButtonPlusReviews />} {/* Умовне відображення кнопки */}
    </div>

  )
}