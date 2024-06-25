import { z } from "zod";

export const OldPathSchemaBase = {
  oldPath: z.string().optional(),
};

const OldPathSchema = z.object(OldPathSchemaBase);

export default OldPathSchema;