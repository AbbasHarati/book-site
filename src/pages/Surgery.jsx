import React from 'react'
import FilteringBooks from '../components/UI/FilteringBooks';


const Surgery = () => {
   const category ="surgery";
  return (
         <FilteringBooks category={category} />
  )
}

export default Surgery