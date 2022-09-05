import React  from 'react'
import '../../styles/sort-section.css'



const SortSection = ({setBooksDataSort}) => {


    // sorting funcs
    const sortByTitle = () => {
        setBooksDataSort((booksData) => {
            const dataToSort = [...booksData].sort((a, b) =>
                a.title > b.title ? 1 : -1,
            );
            return dataToSort;
        })
    }

    const sortByAuthor = () => {
        setBooksDataSort((booksData) => {
            const dataToSort = [...booksData].sort((a, b) =>
                a.author > b.author ? 1 : -1,
            );
            return dataToSort;
        });
    }

    const sortByDate = () => {
        setBooksDataSort((booksData) => {
            const dataToSort = [...booksData].sort((a, b) =>
                a.publicationDate > b.publicationDate ? -1 : 1,
            );
            return dataToSort;
        });
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
