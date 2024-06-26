import { z } from "zod";

export const OldPathSchemaBase = {
  oldPath: z.string().nullable().optional(),
};

const OldPathSchema = z.object(OldPathSchemaBase);

export default OldPathSchema;