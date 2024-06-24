import ProjectsTable from "@/components/projects/table";
import ProjectService from "@/services/projects/projects.service";
import { NextUIProvider } from "@nextui-org/react";
import IJobsSearchParams from "../../interfaces/jobs-search-params.interface";
import transformProjectToTable from "@/components/projects/utils/transform-project-to-table";
import PaginationSchema from "@/validation/schemas/pagination.schema";
import Project from "@/interfaces/project.interface";
import IPagination from "@/services/interfaces/pagination.interface";
import _ from "lodash";
import projectConstants from "@/components/projects/utils/constants";
import ProjectsNavbar from "@/components/projects/navbar";
import CreateProjectModalBtn from "@/components/projects/create-modal";

export default async function PreviousJobs({ searchParams }: IJobsSearchParams) {
  const validate = PaginationSchema.safeParse(searchParams);
  const pagination: IPagination = validate.success ? validate.data : { limit: projectConstants.tableRowLimit, order: 'desc' };
  const projects: Project[] = _.orderBy(await ProjectService.get(pagination), ["id"], "desc");
  const lastProject = await ProjectService.getOne();

  return (
    <>
      <NextUIProvider>
        <ProjectsNavbar />
        <div className="flex min-h-screen flex-col items-center justify-start p-12 h-screen">
          <ProjectsTable className="mt-2" projects={projects.map(transformProjectToTable)} lastId={lastProject?.id || null} />
        </div>
        <CreateProjectModalBtn />
      </NextUIProvider>
    </>
  );
}