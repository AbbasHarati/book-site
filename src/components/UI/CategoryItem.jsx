import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/category-item.css';

const CategoryItem = (props) => {
    const {imgUrl} = props.item;

  return (
    <Col lg='3' md='4' sm='6' className="mb-5">
       <div className="category__item">
         <div className="category__img">
            <img src={imgUrl} alt="" className="w-100"/>
         </div>
       </div>
    </Col>
  )
}

export default CategoryItem
