import { projects } from '@/app/data';
import { PageProjectDetailProps } from '@/app/props';
import ProjectDetail from './ProjectDetail';

const PageProjectDetail = async ({  
  params,
}: PageProjectDetailProps)  =>{
  const  { idProject }  = await params;
  const project = projects.find(
    (p) => p.id === parseInt(idProject, 10)
  );
  
    if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Proyecto no encontrado</p>
      </div>
    );
  }

  return (
    <ProjectDetail project={project} />
  )
};

export default PageProjectDetail;
