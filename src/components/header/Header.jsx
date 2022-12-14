import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import HeaderDropdown from '../UI/HeaderDropdown';
import SearchBox from '../UI/SearchBox';


const Header = () => {
  return (
    <header className='header__main'>
      <Container>
        {/*============= headet top ==========*/}
        <Row className='header__top'>
          <Col sm>
            <div className='header__top_right'>
              <Link to='#'>
                <i class="ri-login-circle-line"></i>
                <span>ورود</span>
              </Link>

              <Link to='#'>
                <i class="ri-user-line"></i>
                <span>ثبت نام</span>
              </Link>
            </div>
          </Col>

          <Col sm>
            <SearchBox />
          </Col>
        </Row>
        <hr />
        {/*============= header middle ==========*/}
        <Row className='header__bottom'>
          <Col sm>
            <div className='header__logo'>
              <h3>
                <Link to='/home'><i class="ri-book-open-fill"></i>
                  <span>مرجع دانلود کتاب دندانپزشکی</span>
                </Link>
              </h3>
            </div>
          </Col>

          <Col sm>
            <div className="header__category">
              <HeaderDropdown />
           |</div>
          </Col>
        </Row>
      </Container>
    </header >
  );
}

export default Header
