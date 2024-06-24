import { z } from "zod";
import BooleanStringEnum from "../schemas/enums/boolean-string.enum";

const booleanStringSchema = z.enum(BooleanStringEnum).transform((skipId) => (skipId === 'true'));

export default booleanStringSchema;