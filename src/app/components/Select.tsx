'use client'
import { FC} from "react";

const Select:FC<{array:string[],value:string,setValue:(value:string) => void}>=({array,value,setValue})=>{ 
  return (    
      <select 
        className="bg-gray-200  pt-2  pb-2 pl-3 rounded-full text-sm hover:bg-gray-300 font-medium  w-50" 
        value={value}        
        onChange={e=>{setValue(e.target.value);}}     
      >
        {array.map((i=><option key={i}  value={i}>{i}</option>))}                       
      </select>   
   
  );
};  
  
export default Select;