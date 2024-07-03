import { z } from "zod";
import booleanStringSchema from "../utils/boolean-string.schema";
import SortOrder from "@/enums/sort-order.enum";

const PaginationSchema = z.object({
  limit: z.coerce.number(),

  order: z.nativeEnum(SortOrder),

  fromId: z.coerce.number().optional(),

  skipId: booleanStringSchema.default('false'),
});

export default PaginationSchema;