"use server"

export default async function aiGenResponseAction(formData: FormData) {
  return `[generated response]... ${formData.get("query")}]`;
}
