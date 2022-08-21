import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/footer.css';


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
  }
]

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Col lg='12'>
          <div>
            <div className='navigation__wrapper'>
              <span className='mobile__menu'>
                <i class="ri-menu-line"></i>
              </span>

              <div className="navigation">
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>
                      {item.display}
                    </NavLink>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </Col>
        <hr style={{ color: 'white', height: '2px' }}
      />

        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className='logo'>
              <h3>
                <Link to='/home'><i class="ri-book-open-fill"></i>
                  <span>مرجع دانلود کتاب دندانپزشکی</span>
                </Link>
              </h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio corporis expedita fugit, reprehenderit laudantium dicta vero veniam ducimus quia dolore tenetur perferendis, iste dolores nisi, corrupti possimus distinctio at ad?</p>
          </Col>

          <Col lg='4' md='4' sm='6'>
            <h4>حساب کاربری</h4>
            <Link to='#'>
              ورود
            </Link><br />

            <Link to='#'>
              ثبت نام
            </Link>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Zindabazar, Sylhet, Bangladesh</p>
              <p className="office__info">Phone: +0995345875365</p>

              <p className="office__info">Email: muhib5532@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <hr style={{ color: 'white', height: '2px' }} />

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Abbas Harati. All rights reserved.<br />
                تمامی حقوق مادی و معنوی این وب سایت متعلق به خودم است.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
