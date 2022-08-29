import React from 'react'
import TemplateBookShow from '../components/UI/TemplateBookShow'



const Radiology = () => {
  const category = "radiology";
  const title = "کتاب های رادیولوژی";
  return (
         <TemplateBookShow category={category} title={title} />
  )
}

export default Radiology
