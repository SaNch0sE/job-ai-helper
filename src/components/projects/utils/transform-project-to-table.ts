import IProjectTable from "@/components/projects/interfaces/project-table.interface";
import Project from "@/interfaces/project.interface";

const transformProjectToTable = (project: Project): IProjectTable => {
  return {
    ...project,
    dateCreated: project.dateCreated.toISOString(),
    dateModified: project.dateModified.toISOString(),
  };
}

export default transformProjectToTable;