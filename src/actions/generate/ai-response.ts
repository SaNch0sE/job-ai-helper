"use server"

import { projectService } from "@/services/projects/projects.service";
import GenQuerySchema from "@/validation/schemas/gen-query.schema";

export default async function aiGenResponseAction(formData: FormData) {
  const input = {
    query: formData.get("query") as unknown as string,
  };

  const validate = GenQuerySchema.safeParse(input);

  if (!validate.success) {
    console.error(validate.error.issues);

    return;
  }

  const projects = await projectService.searchByEmbedding(validate.data.query);

  return `[generated response... ${JSON.stringify(projects, null, 2)}]`;
}
