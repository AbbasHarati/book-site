import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from 'react-bootstrap';
import categoryData from '../assets/data/categoryData';
import CategoryItem from '../components/UI/CategoryItem';

const Home = () => {
  return (
    <Helmet title="Home">

      {/* ============= hero section =========== */}
      <section>
        <HeroSlider />
      </section>

      {/* =========== category section ============= */}
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">گروه های تخصصی</h2>
            </Col>
              {categoryData.map((item) => (
                <CategoryItem item={item} key={item.id} />
              ))}
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home
