import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: '20', text: 'Open Source Projects'},
  { title: 'User Engagement', text: 'Enhanced user engagement features.', },
  { title: 'Responsive Design', text: 'Achieved responsive design for seamless experience.', },
  { title: 'UX/UI Refinement', text: 'Improved UI/UX for user-friendly design.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.title}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;