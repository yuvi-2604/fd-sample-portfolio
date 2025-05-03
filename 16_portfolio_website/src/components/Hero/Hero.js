import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Proficient Front-End Developer with expertise in modern frameworks (React, Bootstrap, Tailwind) and a passion for creating user-friendly web applications.</SectionText>
      {/* <Button>Learn More</Button> */}
    </LeftSection>
  </section>
);

export default Hero;