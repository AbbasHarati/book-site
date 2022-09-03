import React from 'react'
import TemplateBookShow from '../components/UI/TemplateBookShow';


const Pediatric = () => {
  const category ="pediatric";
  const title = "کتاب های دندانپزشکی کودکان";

  return (
         <TemplateBookShow category={category} title={title} />
  )
}

export default Pediatric