import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/data";

const SingleProject = ({ params }) => {
  const routeName = params.projectRouteName;

  const getProject = () => {
    const data = projects.filter((item) => item.route === routeName);
    return data;
  };

  const project = getProject(routeName)[0];

  return <ProjectDetails project={project} />;
};

export default SingleProject;
