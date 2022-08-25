import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button, Modal } from 'react-bootstrap';

import '../../styles/header-dropdown.css'


function HeaderDropdown() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
           <Button onClick={handleShow}>
                لیست رشته ها
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
                        <div className='modal__section'>
                            <Row>
                                <h4>گروه های تخصصی</h4><hr />
                                <div className="special__category">
                                    <ul>
                                        <li onClick={handleClose}>
                                            <Link to="/Ortho"> ارتودونسی</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/endo"> اندودانتیکس</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/tarmim"> ترمیمی</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/surgery"> جراحی</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/perio"> پریودانتیکس</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/pediatric"> اطفال</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/prosthetics"> پروتز</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/dentalMaterials"> مواد دندانی</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/oralMedicine"> بیماری های دهان</Link>
                                        </li>
                                        <li onClick={handleClose}>
                                            <Link to="/basicSciences"> علوم پایه</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                            <Row>
                                <h4>سوالات آزمون</h4><hr />
                                <div className="questions__category">
                                    <ul>
                                        <li>1 </li>
                                        <li>2 </li>
                                        <li>3 </li>
                                        <li>4 </li>
                                        <li>5 </li>
                                        <li>6 </li>
                                        <li>7 </li>
                                        <li>8 </li>
                                        <li>9 </li>
                                        <li>10 </li>

                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default HeaderDropdown;



{/*

function HeaderDropdown() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
      };

    return (
        <div ref={ref}>
            <Button onClick={handleClick}>Click me to see</Button>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-basic" >
                    <Popover.Header as="h3">رشته های تخصصی</Popover.Header>
                    <div className="popover__body">
                        <Popover.Body>
                            {navLinks.map((item, index) => (
                                <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>
                                    <ul>
                                        <li> {item.display}</li>
                                    </ul>
                                </NavLink>
                            ))
                            }
                        </Popover.Body>
                        <Popover.Header as="h3"> آزمون های گذشته</Popover.Header>
                        <Popover.Body>
                            <ul>
                                <li> 222</li>
                            </ul>
                        </Popover.Body>
                    </div>
                </Popover>
            </Overlay>
        </div>


    );
}

*/}