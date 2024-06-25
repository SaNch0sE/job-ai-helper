import { z } from "zod";
import { EnProjectAction } from "@/enums/project-action.enum";

export const HighlightRowSchemaBase = {
  highlightId: z.coerce.number().min(1).optional(),
  highlightStyle: z.nativeEnum(EnProjectAction),
};

const HighlightRowSchema = z.object(HighlightRowSchemaBase);

export default HighlightRowSchema;