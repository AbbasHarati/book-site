import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { data } from '../assets/data/booksData'
import FilterSection from '../components/UI/FilterSection'
import { useLocation } from "react-router-dom";
import SortSection from '../components/UI/SortSection';


const SearchBooks = () => {

    const location = useLocation();
    const category_id = new URLSearchParams(location.search).get('category_id');

    const [booksData, setBooksData] = useState(data);

    return (
        <Container>
            <Row>
                <Col lg='3' >
                    <div className="filter__section">
                        <FilterSection />
                    </div>
                </Col>

                <Col lg='9' className="result__section">
                    <Row>
                        {category_id}
                    </Row>

                    <Row>
                        <SortSection setBooksData={setBooksData} />
                    </Row>

                    <Row>
                        {
                            booksData.filter(book => book.category_id === category_id).map(book => (
                                <Col lg="3" md="4" sm="6" className='col__section'>
                                    <div className="book__info m-2" key={book.id}>
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
                    </Row>
                    <Row>
                        <SortSection setBooksData={setBooksData} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBooks