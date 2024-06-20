import { z } from "zod";
import BooleanStringEnum from "../enums/boolean-string.enum";

const booleanStringSchema = z.enum(BooleanStringEnum).transform((skipId) => (skipId === 'true'));

export default booleanStringSchema;