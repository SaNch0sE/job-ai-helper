import CreateProjectFormData from "./create-form-data.interface";

export default interface IProjectTable extends CreateProjectFormData {
  id: number;
  features: string;
  techstack: string;
  links: string;
  dateCreated: string;
  dateModified: string;
}
