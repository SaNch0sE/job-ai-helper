export default interface ICreateProjectInput {
  name: string;
  description: string;
  features: string | null;
  techstack: string | null;
  links: string | null;
}