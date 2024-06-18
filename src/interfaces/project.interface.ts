export default interface Project {
  id: number;
  name: string;
  description: string;
  features: string | null;
  techstack: string | null;
  links: string | null;
  dateCreated: Date;
  dateModified: Date;
}