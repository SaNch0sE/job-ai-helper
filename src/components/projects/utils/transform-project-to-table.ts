import IProjectTable from "@/interfaces/project-table.interface";
import Project from "@/interfaces/project.interface";
import nullString from "./null-string";

const transformProjectToTable = (project: Project): IProjectTable => {
  return {
    ...project,
    features: project.features || nullString,
    techstack: project.techstack || nullString,
    links: project.links || nullString,
    dateCreated: project.dateCreated.toISOString(),
    dateModified: project.dateModified.toISOString(),
  };
}

export default transformProjectToTable;