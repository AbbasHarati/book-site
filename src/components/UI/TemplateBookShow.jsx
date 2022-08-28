////   ایجاد صفحه با ساختار ثابت برای نمایش کتاب های تخصص های مختلف در آن


import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import booksData from '../../assets/data/booksData'
import BookItem from './BookItem'
import '../../styles/template-book-show.css'


const TemplateBookShow = (props) => {
    const [booksDataObject, setBookDataObject] = useState(booksData);

    const sortByName = () => {
        setBookDataObject((booksData) => {
            const dataTosort = [...booksData].sort((a, b) =>
                a.title > b.title ? 1 : -1,
            );
            return dataTosort;
        });
    }
    const sortByAuthor = () => {
        setBookDataObject((booksData) => {
            const dataTosort = [...booksData].sort((a, b) =>
                a.author > b.author ? 1 : -1,
            );
            return dataTosort;
        });
    }
    const sortByDate = () => {
        setBookDataObject((booksData) => {
            const dataTosort = [...booksData].sort((a, b) =>
                a.publicationDate > b.publicationDate ? -1 : 1,
            );
            return dataTosort;
        });
    }


    return (
        <Container>
            <Row>
                <Col lg='4' className="filter__section">
                    <div>
                        Filters
                    </div>
                </Col>

                <Col lg='8' className="result__section">
                    <div >
                        <Row>
                            <div className="title__section">
                                <h3>{props.title}</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className="sort__section">
                                <div className="sort__selectors">
                                    <p>مرتب سازی بر اساس:</p>
                                    <ul>
                                        <li onClick={sortByName}>عنوان</li>
                                        <li onClick={sortByAuthor}>نویسنده</li>
                                        <li onClick={sortByDate}>سال انتشار</li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                        <Row className="show__section">
                            {booksDataObject.filter(book => (props.category == book.category || props.category == book.other_category))
                                .map((book) => (
                                    <BookItem item={book} key={book.id} />
                                ))
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default TemplateBookShow
