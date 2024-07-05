"use server"

import CreateProjectSchema from "@/validation/schemas/create-project.schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import setSearchParams from "@/utils/set-search-params";
import HighlightRow from "@/interfaces/highlight-row.interface";
import { EnProjectAction } from "@/enums/project-action.enum";
import CreateProjectFormData from "@/interfaces/create-form-data.interface";
import { projectService } from "@/services/projects/projects.service";

export default async function CreateProjectAction(formData: FormData) {
  const input: CreateProjectFormData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    features: formData.get("features") as string,
    techstack: formData.get("techstack") as string,
    links: formData.get("links") as string,
  };
  const validate = CreateProjectSchema.safeParse(input);

  if (!validate.success) {
    console.error(validate.error.issues);

    return;
  }

  const created = await projectService.create(validate.data);
  const highlight: HighlightRow = {
    highlightId: created.id,
    highlightStyle: EnProjectAction.create,
  };

  revalidatePath("/previous-jobs");
  redirect(`/previous-jobs?${setSearchParams(highlight)}`);
}
