import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  const src = '/images/hero-img';
  return (
    <Wrapper>
        <picture>
            <source type='image/jpg' srcSet={
                `${src}.jpg 1x,
                ${src}@2x.jpg 2x,
                ${src}@3x.jpg 3x`
            }
            />
            <HeroImage src={`${src}.jpg`} alt="Hero image"/>
        </picture>
      <Swoop src="/swoop.svg" alt=""/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
