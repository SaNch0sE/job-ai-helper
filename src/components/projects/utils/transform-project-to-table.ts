import IProjectTable from "@/interfaces/project-table.interface";
import Project from "@/interfaces/project.interface";
import cutString from "./cut-string";

const transformProjectToTable = (project: Project, short?: boolean): IProjectTable => {
  if (short) {
    return {
      ...project,
      description: cutString(project.description),
      features: cutString(project.features),
      techstack: cutString(project.techstack),
      links: cutString(project.links),
      dateCreated: project.dateCreated.toISOString(),
      dateModified: project.dateModified.toISOString(),
    };
  }

  return {
    ...project,
    description: project.description,
    features: project.features || "",
    techstack: project.techstack || "",
    links: project.links || "",
    dateCreated: project.dateCreated.toISOString(),
    dateModified: project.dateModified.toISOString(),
  };
}

export default transformProjectToTable;
