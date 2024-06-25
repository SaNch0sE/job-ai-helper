import CreateProjectSchema from "./create-project.schema";
import { OldPathSchemaBase } from "./old-path.schema";
import { ProjectIdSchemaBase } from "./project-id.schema";

const EditProjectSchema = CreateProjectSchema.extend(ProjectIdSchemaBase).extend(OldPathSchemaBase);

export default EditProjectSchema;