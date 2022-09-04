import React, { useState } from 'react'
import booksData from '../../assets/data/booksData'
import TemplateBookShow from './TemplateBookShow';



const FilteringBooks = (props) => {

      const [booksDataFiltered, setBookDataFiltered] = useState(booksData);
      const filteredBooks = booksDataFiltered.filter((book) => book.category === props.category)
      
    return (
        <>
           <TemplateBookShow category={props.category} booksData={filteredBooks} />
        </>
    )
}

export default FilteringBooks
