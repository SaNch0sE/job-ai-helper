import IProjectTable from "@/interfaces/project-table.interface";
import Project from "@/interfaces/project.interface";
import cutString from "./cut-string";

const transformProjectToTable = (project: Project): IProjectTable => {
  return {
    ...project,
    description: cutString(project.features),
    features: cutString(project.features),
    techstack: cutString(project.techstack),
    links: cutString(project.links),
    dateCreated: project.dateCreated.toISOString(),
    dateModified: project.dateModified.toISOString(),
  };
}

export default transformProjectToTable;