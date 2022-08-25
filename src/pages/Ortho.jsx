import React from 'react'
import TemplateBookShow from '../components/UI/TemplateBookShow'


const Ortho = () => {
  const category ="orthodontic";
  const title = "کتاب های ارتودونسی";

  return (
         <TemplateBookShow category={category} title={title} />
  )
}

export default Ortho
