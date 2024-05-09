'use client'
import { useState } from "react"
import ReviewList from "./components/ReviewList";
import { reviews } from "@/app/test/test"
import Select from "@/app/components/Select"
import {AverageReviews} from "@/app/components/AverageReviews"
import ButtonPlusReviews from "./components/ButtonPlusReviews";
import { Filter } from "./functions/Filter";

export default function Home() {
  const [filter, setFilter] = useState<string>('');
  const array: string[] = ['Спочатку найкращі', 'Найгірші'];
    
     Filter(reviews, filter);
    
    const [showButton, setShowButton] = useState<boolean>(true); // Стан для відображення кнопки
  return (

    <div className="flex flex-wrap gap-10 container px-10 py-10 md:flex-nowrap">
      <div className="w-3/8 lg:w-1/4">
      <AverageReviews reviews={reviews} ></AverageReviews>
      </div>
      <div className="w-full">
      <Select value={filter} setValue={setFilter} array={array}></Select>
      <ReviewList reviews={reviews}></ReviewList>
      
      {showButton && <ButtonPlusReviews  />} {/* Умовне відображення кнопки */}
    </div>
    </div>
  )
}