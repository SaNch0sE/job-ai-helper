import ICreateProjectInput from "./create-input.interface";

export default interface IEditProjectInput extends ICreateProjectInput {
  id: number;
  oldPath: string;
}