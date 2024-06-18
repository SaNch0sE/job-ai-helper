export default interface IProjectTable {
  id: number;
  name: string;
  description: string;
  features: string | null;
  techstack: string | null;
  links: string | null;
  dateCreated: string;
  dateModified: string;
}