"use server"

import ProjectService from "@/services/projects/projects.service";
import { revalidatePath } from "next/cache";
import IEditProjectInput from "@/interfaces/edit-input.interface";
import EditProjectSchema from "@/validation/schemas/edit-project.schema";
import _ from "lodash";
import { redirect } from "next/navigation";
import { EnProjectAction } from "@/enums/project-action.enum";
import HighlightRow from "@/interfaces/highlight-row.interface";
import concatParamsFromUrlPath from "@/utils/concat-params-from-url-path";

const projectsTableUrl = "/previous-jobs";

export default async function EditProjectAction(formData: FormData) {
  const input: IEditProjectInput = {
    id: formData.get("id") as unknown as number,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    features: formData.get("features") as string,
    techstack: formData.get("techstack") as string,
    links: formData.get("links") as string,
    oldPath: formData.get("oldPath") as string,
  };
  const validate = EditProjectSchema.safeParse(input);

  if (!validate.success) {
    console.error(validate.error.issues);

    return;
  }

  await ProjectService.update(
    validate.data.id,
    _.pick(validate.data, ["name", "description", "features", "techstack", "links"]),
  );

  const highlight: HighlightRow = {
    highlightId: validate.data.id,
    highlightStyle: EnProjectAction.update,
  };
  const path = validate.data.oldPath || projectsTableUrl;
  
  revalidatePath(path);
  
  redirect(`${projectsTableUrl}?${concatParamsFromUrlPath(path, highlight)}`);
}