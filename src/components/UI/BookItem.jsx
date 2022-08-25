import React from 'react'
import {Col} from 'react-bootstrap'


const BookItem = (props) => {
    const { imgUrl, title, author, category } = props.item;
    return (
          <Col lg="3" md="3" sm="6" className="mb-5 mt-5">
            <div className="book__info">
              <div className="book__img">
                <img src={imgUrl} width='220' height='300' alt="" className="img__responsive w-100" typeof="foaf:Image" />
              </div>
              <div className="book__title">
                <h4>{title}</h4>
              </div>
              <div className="book__author">
                <h5>{author}</h5>
              </div>
              <div className="book__category">
                <h6>{category}</h6>
              </div>
            </div>
          </Col>
    )
  }

  export default BookItem;