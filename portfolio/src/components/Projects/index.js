import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle';
import ProjectCards from '../Cards/ProjectCards';
import { projects } from '../../data/constants';


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');


  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEBSITE APPS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEBSITE APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile app' ?
            <ToggleButton active value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APPS</ToggleButton>
            :
            <ToggleButton value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'design' ?
            <ToggleButton active value="design" onClick={() => setToggle('design')}>DESIGN</ToggleButton>
            :
            <ToggleButton value="design" onClick={() => setToggle('design')}>DESIGN</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects