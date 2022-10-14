type ProjectsType = {
  id: string;
  title: string;
  thumbnailImage: string;
  backgroundImage: string;
  showcase1: {
    image: string;
    description: string;
  };
  showcase2: {
    image1: string;
    image2: string;
    description: string;
  };
  showcase3: {
    image: string;
  };
}[];

export interface IProjects {
  projects: ProjectsType;
}
