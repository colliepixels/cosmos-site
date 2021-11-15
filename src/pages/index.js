import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import HeroSection3 from '../components/HeroSection3';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar toggle={toggle} />
        <Container>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection2 {...homeObjTwo} />
            <HeroSection2 />
            <HeroSection3 />
            <InfoSection3 {...homeObjThree} />
        </Container>

      <Footer /> 
    </>
  );
}

export default Home;
