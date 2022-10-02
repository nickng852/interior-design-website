import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type IProjects = {
  id: string;
  thumbnailImage: string;
  showcaseImage1: string;
  showcaseImage2: string;
  showcaseImage3: string;
  showcaseImage4: string;
  showcaseImage5: string;
  showcaseImage6: string;
  showcaseImage7: string;
  title: string;
  description: string;
}[];

interface Props {
  projects: IProjects;
}

const ProjectPage: FC<Props> = ({ projects }) => {
  const { id } = useParams();

  return (
    <Main>
      {projects
        .filter((project) => project.id === id)
        .map((project) => (
          <>
            <div>{project.id}</div>
            <div>{project.title}</div>
            <div>{project.description}</div>
            <img src={project.thumbnailImage} />
          </>
        ))}
    </Main>
  );
};

const Main = styled.section`
  background-color: #e6b2b2;
`;

export default ProjectPage;
