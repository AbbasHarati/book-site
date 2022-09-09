import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button, Modal, Col } from 'react-bootstrap';

import '../../styles/header-dropdown.css'


function HeaderDropdown() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow}>
                دسترسی سریع
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                centered={true}
                size='xl'
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body >
                    <Container>
                        <hr />
                        <Row>
                            <div className='special__list'>
                                <h4>گروه های تخصصی</h4>
                            </div>
                        </Row>
                        <hr />

                        <div className='special__items'>
                            <Row className='row__items'>
                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=10" ><i class="ri-arrow-left-circle-fill"></i><span>ارتودونسی</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=11" ><i class="ri-arrow-left-circle-fill"></i><span>اندودانتیکس</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=12" ><i class="ri-arrow-left-circle-fill"></i><span>ترمیمی</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=13" ><i class="ri-arrow-left-circle-fill"></i><span>جراحی دهان فک صورت</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=14" ><i class="ri-arrow-left-circle-fill"></i><span>پریودانتیکس</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=15" ><i class="ri-arrow-left-circle-fill"> </i><span>دندانپزشکی کودکان</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=16" ><i class="ri-arrow-left-circle-fill"></i><span>پروتز</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                    <Link to="/searchBooks?category_id=17" ><span> <i class="ri-arrow-left-circle-fill"></i>بیماری های دهان</span></Link>
                                    </h4>
                                </Col>

                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                        <Link to="/searchBooks" state={{ category: "radiology" }} ><i class="ri-arrow-left-circle-fill"></i><span>رادیولوژی</span></Link>
                                    </h4>
                                </Col>
                                <Col lg='3'>
                                    <h4 onClick={handleClose}>
                                        <Link to="/searchBooks" state={{ category: "basicSciences" }} ><i class="ri-arrow-left-circle-fill"></i><span>علوم پایه</span></Link>
                                    </h4>
                                </Col>


                            </Row>
                        </div>
                        <hr />

                        <Row>
                            <h4>سوالات آزمون</h4><hr />
                        </Row>

                        <Row>
                            <Col lg='3'>
                                <h4 onClick={handleClose}>
                                    <Link to="/#">آرمون تخصص</Link>
                                </h4>
                            </Col>

                            <Col lg='3'>
                                <h4 onClick={handleClose}>
                                    <Link to="/#">آزمون دستیاری</Link>
                                </h4>
                            </Col>

                            <Col lg='3'>
                                <h4 onClick={handleClose}>
                                    <Link to="/#">آزمون ارتقاء</Link>
                                </h4>
                            </Col>

                            <Col lg='3'>
                                <h4 onClick={handleClose}>
                                    <Link to="/#">آزمون ملی</Link>
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body >
            </Modal >
        </>
    );
}
export default HeaderDropdown;



