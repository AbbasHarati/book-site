import React from 'react'
import TemplateBookShow from '../components/UI/TemplateBookShow'



const Endo = () => {
  const category = "endondontics";
  const title = "کتاب های اندودانتیکس";
  return (
         <TemplateBookShow category={category} title={title} />
  )
}

export default Endo
