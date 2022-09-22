import React from "react";
import NavbarLight from "../components/NavbarLight";
import Slideshow from "../components/Slideshow";
import { slide } from "../components/SlideshowData";
import ScrollDown from "../components/ScrollDown";
import ProjectCard from "../components/ProjectCard";
import { project } from "../components/ProjectCardData";
import Showcase from "../components/Showcase";
import { image } from "../components/ShowcaseData";
import Partnership from "../components/Partnership";
import { logo } from "../components/PartnershipData";

const Home = ({ open, setOpen, navbar, setNavbar }) => {
  return (
    <>
      <NavbarLight
        open={open}
        setOpen={setOpen}
        navbar={navbar}
        setNavbar={setNavbar}
      />
      <Slideshow slides={slide} />
      <ScrollDown />
      <ProjectCard projects={project} />
      <Showcase images={image} />
      <Partnership logos={logo} />
    </>
  );
};

export default Home;
