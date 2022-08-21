import React from 'react';
import { Container, Row, Col, FormGroup, Button, Stack, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';


const navLinks = [
  {
    path: '/home',
    display: 'صفحه اصلی'
  },
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
  },
  {
    path: '/about',
    display: 'درباره ما'
  },
  {
    path: '/contact',
    display: 'تماس با ما'
  }
]

const Header = () => {
  return (
    <header>
      {/*============= header top ==========*/}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg='8' md='8' sm='2'>
              <div className='header__top__right'>
                <Link to='#'>
                  <i class="ri-login-circle-line"></i>
                  ورود
                </Link>

                <Link to='#'>
                  <i class="ri-user-line"></i>
                  ثبت نام
                </Link>
              </div>
            </Col>
            <Col lg='4' md='4' sm='2'>
              <div className='header__top_help'>
                <span> کمک نیاز دارید؟</span>
                <span><i class="ri-phone-line"></i> +98-915-111-2222</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*============= header middle ==========*/}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='4' md='4' sm='2'>
              <div className='logo'>
                <h3>
                  <Link to='/home'><i class="ri-book-open-fill"></i>
                    <span>مرجع دانلود کتاب دندانپزشکی</span>
                  </Link>
                </h3>
              </div>
            </Col>

            <Col lg='8' md='8' sm='2'>
              <div>
                <Form>
                  
                    <FormGroup className='mt-3 w-50'>
                      <Stack direction="horizontal">
                      <Form.Control type="text" placeholder="Enter email" />
                      <Button variant="primary" type='submit'>جستجو</Button>
                     </Stack>
                     </FormGroup>
                 
                </Form>
              </div>

            </Col>
          </Row>
        </Container>
      </div>

      {/*============= main navigation ==========*/}
      <div className='main__navbar'>
        <Container>
          <div className='navigation__wrapper'>
            <span className='mobile__menu'>
              <i class="ri-menu-line"></i>
            </span>

            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink to={item.path} key={index} className={navClass => navClass.
                    isActive ? 'nav__active nav__item' : 'nav__item'}>
                    {item.display}
                  </NavLink>
                ))
                }
              </div>
            </div>
          </div>
        </Container>
      </div>

    </header >
  );
}

export default Header
