import React from "react";

import Slideshow from "../components/Slideshow";
import { slides } from "../components/SlideshowData";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/ProjectCardData";
import Showcase from "../components/Showcase";
import { images } from "../components/ShowcaseData";
import Partnership from "../components/Partnership";
import { logos } from "../components/PartnershipData";

const HomePage = () => {
  return (
    <>
      <Slideshow slides={slides} />
      <ProjectCard projects={projects} />
      <Showcase images={images} />
      <Partnership logos={logos} />
    </>
  );
};

export default HomePage;
