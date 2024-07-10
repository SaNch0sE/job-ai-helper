import { z } from "zod";

export const GenQuerySchemaBase = {
  query: z.string(),
};

const GenQuerySchema = z.object(GenQuerySchemaBase);

export default GenQuerySchema;
