import ICreateProjectInput from "./create-input.interface";

export default interface IProjectTable extends ICreateProjectInput {
  id: number;
  dateCreated: string;
  dateModified: string;
}