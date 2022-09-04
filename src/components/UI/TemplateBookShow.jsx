////   ایجاد صفحه با ساختار ثابت برای نمایش کتاب های تخصص های مختلف در آن


import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BooksShow from './BooksShow'
import FilterSection from './FilterSection'
import '../../styles/template-book-show.css'


const TemplateBookShow = (props) => {

    const [category] = useState(props.category);
    const [booksData] = useState(props.booksData);

    return (
        <Container>
            <Row>
                <Col lg='3' >
                    <div className="filter__section">
                        <FilterSection />
                    </div>
                </Col>

                <Col lg='9' className="result__section">
                    <div >
                        <Row>
                            <div className="title__section">
                                <h3>{props.category}</h3>
                            </div>
                        </Row>

                        <Row className="show__section">
                            <BooksShow booksData={booksData} category={category} />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TemplateBookShow
