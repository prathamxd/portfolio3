import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/data";

const SingleProject = ({ params }) => {
  console.log(params);
  // console.log(projects);

  const routeName = params.projectRouteName; //admin-dashboard

  const getProject = () => {
    const data = projects.filter((item) => item.route === routeName);
    return data;
  };

  const project = getProject(routeName)[0];

  return <ProjectDetails project={project} />;
};

export default SingleProject;
