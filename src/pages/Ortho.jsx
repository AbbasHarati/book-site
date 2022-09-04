import React from 'react'
import FilteringBooks from '../components/UI/FilteringBooks';


const Ortho = () => {
  const category ="orthodontic";

  return (
         <FilteringBooks category={category} />
  )
}

export default Ortho
