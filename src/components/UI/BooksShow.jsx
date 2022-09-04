import React, { useState } from 'react'
import Pagination from './Pagination'
import { Col } from 'react-bootstrap'
import '../../styles/book-show.css'


const BooksShow = (props) => {

  const [booksData] = useState(props.booksData);
  const [booksDataSort, setBooksDataSort] = useState(booksData);

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksDataSort.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // sorting funcs
  const sortByName = () => {
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
    <>
      <div className="sort__section">
        <div className="sort__selectors">
          <strong><p>مرتب سازی بر اساس:</p></strong>
          <ul>
            <li onClick={sortByName}>عنوان</li>
            <li onClick={sortByAuthor}>نویسنده</li>
            <li onClick={sortByDate}>سال انتشار</li>
          </ul>
        </div>
      </div>

      <div className="pagination__section">
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={booksData.length}
          paginate={paginate}
        />
      </div>
      {
        currentBooks
          .map((book) => (
            <Col lg="3" md="4" sm="6" className='col__section'>
              <div className="book__info m-2" >
                <div className="book__img">
                  <img src={book.imgUrl} width='170' height='260' alt="" className="img__responsive w-80" typeof="foaf:Image" />
                </div>
                <div className="book__details">
                  <div className="book__title">
                    <p><strong>{book.title}</strong></p>
                  </div>
                  <div className="book__edition">
                    <p>{book.edition}</p>
                  </div>
                  <div className="book__author">
                    <p>{book.author}</p>
                  </div>
                  <div className="book__pubDate">
                    <p>{book.publicationDate}</p>
                  </div>
                  <div className="book__category">
                    <p>{book.category}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))
      }
      <div className="pagination__section">
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={booksData.length}
          paginate={paginate}
        />
      </div>
    </>
  )
}

export default BooksShow;