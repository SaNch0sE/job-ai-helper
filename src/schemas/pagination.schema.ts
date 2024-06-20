import { z } from "zod";
import PrismaOrderEnum from "./enums/prisma-order.enum";
import booleanStringSchema from "./utils/boolean-string.schema";

const PaginationSchema = z.object({
  limit: z.coerce.number(),

  order: z.enum(PrismaOrderEnum),

  fromId: z.coerce.number().optional(),

  skipId: booleanStringSchema.default('false'),
});

export default PaginationSchema;