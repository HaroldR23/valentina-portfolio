
export interface HeroProps {
  imageUrl: string;
};

export interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};


export interface ProjectData {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  details: {
    year: string;
    area: string;
    location: string;
  };
  images: string[];
};

export interface PageProjectDetailProps {
  params: Promise<{ idProject: string }>
};

export interface ProjectDetailProps {
  project: ProjectData;
};
