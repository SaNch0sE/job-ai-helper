"use server"

import ProjectService from "@/services/projects/projects.service";
import ProjectIdSchema from "@/validation/schemas/project-id.schema";
import { revalidatePath } from "next/cache";

export default async function DeleteProjectAction(formData: FormData) {
  const input: { id: number } = {
    id: formData.get("id") as unknown as number,
  };
  const validate = ProjectIdSchema.safeParse(input);

  if (!validate.success) {
    console.error(validate.error.issues);

    return;
  }

  await ProjectService.delete(validate.data.id);

  revalidatePath("/previous-jobs");
}