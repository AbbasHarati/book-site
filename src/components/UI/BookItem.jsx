import React from 'react'
import { Col } from 'react-bootstrap'
import '../../styles/book-item.css'


const BookItem = (props) => {
  const { imgUrl, title, edition, author } = props.item;
  return (
    <Col lg="3" md="4" sm="6" className='col__section'>
      <div className="book__info m-2" >
        <div className="book__img">
          <img src={imgUrl} width='170' height='260' alt="" className="img__responsive w-80" typeof="foaf:Image" />
        </div>
        <div className="book__details">
          <div className="book__title">
            <p><strong>{title}</strong></p>
          </div>
          <div className="book__edition">
            <p>{edition}</p>
          </div>
          <div className="book__author">
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BookItem;