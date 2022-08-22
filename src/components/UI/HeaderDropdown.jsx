import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Popover, Overlay, Modal } from 'react-bootstrap';
import '../../styles/header-dropdown.css'


const navLinks = [

    {
        path: '/Ortho',
        display: ' ارتودونسی'
    },
    {
        path: '/endo',
        display: 'اندودانتیکس '
    },
    {
        path: '/tarmim',
        display: 'ترمیمی '
    },
    {
        path: '/surgery',
        display: 'جراحی '
    },
    {
        path: '/perio',
        display: ' پریودانتیکس'
    },
    {
        path: '/prosthetics',
        display: ' پروتز'
    }
]



function HeaderDropdown() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                لیست رشته ها
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                centered={true}
                size='lg'
           >
            <Modal.Header closeButton>

            </Modal.Header>
                <Modal.Body >
                    {navLinks.map((item, index) => (
                        <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>
                            <ul>
                                <li> {item.display}</li>
                            </ul>
                        </NavLink>
                    ))
                    }
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