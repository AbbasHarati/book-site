import img1 from "../../assets/images/category/category-item1.png";
import img2 from "../../assets/images/category/category-item2.png"
import img3 from "../../assets/images/category/category-item3.png"
import img4 from "../../assets/images/category/category-item4.png"
import img5 from "../../assets/images/category/category-item5.webp"
import img6 from "../../assets/images/category/category-item6.webp"
import img7 from "../../assets/images/category/category-item7.webp"

import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../styles/category-item.css';


const CategoryItem = () => {

  return (
    <Container>
      <p>گروه های تخصصی</p>
      <Row className="row__item">
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "orthodontics"}} > <img src={img1} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "endodontics"}}> <img src={img2} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "operative"}} ><img src={img3} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "surgey"}}> <img src={img4} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "periodontics"}} > <img src={img5} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "pediatric"}} ><img src={img6} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "prosthesis"}} > <img src={img7} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "oralMedicine"}} > <img src={img7} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "radiology"}} > <img src={img7} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>
        <Col lg='3' md='4' sm='6' xs='6' className="cat__item"><Link to="/searchBooks" state={{category: "basicSciences"}} > <img src={img7} width="465" height="295" className="img__responsive" typeof="foaf:Image" alt="" /></Link></Col>


      </Row>
    </Container>


  )
}

export default CategoryItem
