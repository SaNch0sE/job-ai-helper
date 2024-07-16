"use server"

import { generateProjectResponse } from "@/services/openai/openai.service";
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
  const { query } = validate.data;

  const projects = await projectService.searchByEmbedding(query);

  console.debug(`aiGenResponseAction ${projects}`);

  const projectsContext = projects.map(projectService.concatProjectData).join('\n');

  return generateProjectResponse(projectsContext, query);
}
