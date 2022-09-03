////   ایجاد صفحه با ساختار ثابت برای نمایش کتاب های تخصص های مختلف در آن


import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import booksData from '../../assets/data/booksData'
import BooksShow from './BooksShow'
import FilterSection from './FilterSection'
import '../../styles/template-book-show.css'


const TemplateBookShow = (props) => {

    

    const [category] = useState(props.category);
   
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(30);

    // Get current books
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = booksData.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <>
            <Container>
                <Row>
                    {/* ======== بخش فیلتر - منوهای کنار  =======*/}
                    <Col lg='3' >
                        <div className="filter__section">
                            <FilterSection />
                        </div>
                    </Col>
                    {/* ======= بخش وسط - بخش نمایش تنایج ====== */}

                    <Col lg='9' className="result__section">
                        <div >
                            <Row>
                                <div className="title__section">
                                    <h3>{props.title}</h3>
                                </div>
                            </Row>
                            <Row>
                                <div className="sort__section">
                                    <div className="sort__selectors">
                                        <strong><p>مرتب سازی بر اساس:</p></strong>
                                        <ul>
                                            <li >عنوان</li>
                                            <li >نویسنده</li>
                                            <li >سال انتشار</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                            </Row>
                            <Row className="show__section">
                            
                                <BooksShow booksData={currentBooks} category={category} />
                            </Row>
                            <Row>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default TemplateBookShow
