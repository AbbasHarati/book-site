////   ایجاد صفحه با ساختار ثابت برای نمایش کتاب های تخصص های مختلف در آن


import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import booksData from '../../assets/data/booksData'
import BookItem from './BookItem'
import '../../styles/template-book-show.css'


const TemplateBookShow = (props) => {

    return (
        <Container>
            <Row>
                <Col lg='4'>
                    <div className="filter__section">
                        Filters
                    </div>
                </Col>

                <Col lg='8'>
                    <div className="result__section">
                        <Row><h3>{props.title}</h3></Row>
                        <Row>sort</Row>
                        <Row>
                            {booksData.filter(book => (props.category==book.category || props.category==book.other_category)).map((item) => (
                                <BookItem item={item} key={item.id} />
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default TemplateBookShow
