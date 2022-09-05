import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import booksData from '../assets/data/booksData'

import FilterSection from '../components/UI/FilterSection'
import { useState } from 'react'
import SortSection from '../components/UI/SortSection'


const SearchBooks = () => {

    const location = useLocation()
    const { category } = location.state

    const [booksDataSort, setBooksDataSort] = useState(booksData);

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
                        {category}
                    </Row>

                    <Row>
                        <SortSection  setBooksDataSort={setBooksDataSort} />
                    </Row>

                    <Row>
                        {
                            booksDataSort.filter(book => book.category === category).map(filteredBooks => (
                                <Col lg="3" md="4" sm="6" className='col__section'>
                                    <div className="book__info m-2" >
                                        <div className="book__img">
                                            <img src={filteredBooks.imgUrl} width='170' height='260' alt="" className="img__responsive w-80" typeof="foaf:Image" />
                                        </div>
                                        <div className="book__details">
                                            <div className="book__title">
                                                <p><strong>{filteredBooks.title}</strong></p>
                                            </div>
                                            <div className="book__edition">
                                                <p>{filteredBooks.edition}</p>
                                            </div>
                                            <div className="book__author">
                                                <p>{filteredBooks.author}</p>
                                            </div>
                                            <div className="book__pubDate">
                                                <p>{filteredBooks.publicationDate}</p>
                                            </div>
                                            <div className="book__category">
                                                <p>{filteredBooks.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBooks
