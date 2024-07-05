import CreateProjectFormData from "./create-form-data.interface";

export default interface IEditProjectInput extends CreateProjectFormData {
  id: number;
  oldPath: string;
}
