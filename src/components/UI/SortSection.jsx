import React from 'react'
import { useState } from 'react'
import '../../styles/sort-section.css'
import {data} from '../../assets/data/booksData'




const SortSection = ({ setBooksData }) => {

    const [booksData] = useState(data);
    const [sorted, setSorted] = useState();

   // sorting funcs
console.log(booksData);
   const sortByTitle = () => {
    setSorted();
    const booksDataCopy = [...booksData];
    booksDataCopy.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
    });
    setBooksData(booksDataCopy);
}

const sortByAuthor = () => {
    setSorted();
    const booksDataCopy = [...booksData];
    booksDataCopy.sort((a, b) => {
        return a.author > b.author ? 1 : -1;
    });
    setBooksData(booksDataCopy);
}

const sortByDate = () => {
    setSorted();
    const booksDataCopy = [...booksData];
    booksDataCopy.sort((a, b) => {
        return a.publicationDate > b.publicationDate ? -1 : 1;
    });
    setBooksData(booksDataCopy);
}


    return (
        <div className="sort__section">
            <div className="sort__selectors">
                <strong><p>مرتب سازی بر اساس:</p></strong>
                <ul>
                    <li onClick={sortByTitle}>عنوان</li>
                    <li onClick={sortByAuthor}>نویسنده</li>
                    <li onClick={sortByDate}>سال انتشار</li>
                </ul>
            </div>
        </div>
    )
}

export default SortSection