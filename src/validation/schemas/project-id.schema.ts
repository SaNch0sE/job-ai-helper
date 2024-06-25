import { z } from "zod";

export const ProjectIdSchemaBase = {
  id: z.coerce.number().min(1),
};

const ProjectIdSchema = z.object(ProjectIdSchemaBase);

export default ProjectIdSchema;