import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from "../components/helmet/Helmet";
import { Container} from 'react-bootstrap';
import CategoryItem from '../components/UI/CategoryItem';


const Home = () => {
  return (
    <Helmet title="Home">

      {/* ============= hero section =========== */}
      <section>
        <HeroSlider />
      </section>

      {/* =========== category section ============= */}
      <section className="mt-3">
        <Container>
          <CategoryItem />
        </Container>
      </section>

    </Helmet>
  )
}

export default Home
