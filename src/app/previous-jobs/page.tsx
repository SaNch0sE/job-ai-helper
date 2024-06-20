import ProjectsTable from "@/components/projects/table";
import ProjectService from "@/services/projects/projects.service";
import { NextUIProvider } from "@nextui-org/react";
import IJobsSearchParams from "./interfaces/jobs-search-params.interface";
import transformProjectToTable from "@/components/projects/utils/transform-project-to-table";
import PaginationSchema from "@/schemas/pagination.schema";
import Project from "@/interfaces/project.interface";
import IPagination from "@/services/interfaces/pagination.interface";

export default async function PreviousJobs({ searchParams }: IJobsSearchParams) {
  const validate = PaginationSchema.safeParse(searchParams);
  const pagination: IPagination = validate.success ? validate.data : { limit: 10, order: 'asc' };
  const projects: Project[] = await ProjectService.get(pagination);

  return (
    <>
      <NextUIProvider>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
          <ProjectsTable projects={projects.map(transformProjectToTable)} />
        </div>
      </NextUIProvider>
    </>
  );
}