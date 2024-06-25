import ICreateProjectInput from "./create-input.interface";

export default interface IProjectTable extends ICreateProjectInput {
  id: number;
  features: string;
  techstack: string;
  links: string;
  dateCreated: string;
  dateModified: string;
}