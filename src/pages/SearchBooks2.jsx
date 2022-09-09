import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import booksData from '../assets/data/booksData'
import FilteringBooks from '../components/UI/FilteringBooks'


const SearchBooks = () => {

    const location = useLocation();
    const category_id = new URLSearchParams(location.search).get('category_id');

    const filteredBooks = booksData.filter(book => book.category_id === category_id);

    const [booksDataSort, setBooksDataSort] = (filteredBooks);

    console.log(booksData);
    console.log(category_id);
    console.log(filteredBooks);

    return (
        <>
            <FilteringBooks booksData={filteredBooks} category={category_id} />
        </>
    )
}

export default SearchBooks