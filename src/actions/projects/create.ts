"use server"

import ICreateProjectInput from "@/interfaces/create-input.interface";
import CreateProjectSchema from "@/validation/schemas/create-project.schema";
import ProjectService from "@/services/projects/projects.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import setSearchParams from "@/utils/set-search-params";
import HighlightRow from "@/interfaces/highlight-row.interface";
import { EnProjectAction } from "@/enums/project-action.enum";

export default async function CreateProjectAction(formData: FormData) {
  const input: ICreateProjectInput = {
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

  const created = await ProjectService.create(validate.data);
  const highlight: HighlightRow = {
    highlightId: created.id,
    highlightStyle: EnProjectAction.create,
  };

  revalidatePath("/previous-jobs");
  redirect(`/previous-jobs?${setSearchParams(highlight)}`);
}