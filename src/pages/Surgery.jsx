import React from 'react'
import TemplateBookShow from '../components/UI/TemplateBookShow'


const Surgery = () => {
  const category ="surgery";
  const title = "کتاب های جراحی";

  return (
         <TemplateBookShow category={category} title={title} />
  )
}

export default Surgery