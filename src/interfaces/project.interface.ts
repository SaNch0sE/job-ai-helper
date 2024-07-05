export default interface Project {
  id: number;
  name: string;
  description: string;
  features: string | null;
  techstack: string | null;
  links: string | null;
  embedding: Array<number> | null,
  dateCreated: Date;
  dateModified: Date;
}
