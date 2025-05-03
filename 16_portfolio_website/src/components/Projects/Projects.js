import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, id) => {
        return (
          <BlogCard key={id}>
          <Img src={project.image} />
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{project.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, id) => {
                  return <Tag key={id}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit}>Code</ExternalLinks>
              <ExternalLinks href={project.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;