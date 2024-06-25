import ProjectsTable from "@/components/projects/table";
import ProjectService from "@/services/projects/projects.service";
import { NextUIProvider } from "@nextui-org/react";
import IJobsSearchParams from "../../interfaces/jobs-search-params.interface";
import transformProjectToTable from "@/components/projects/utils/transform-project-to-table";
import Project from "@/interfaces/project.interface";
import _ from "lodash";
import CreateProjectModalBtn from "@/components/projects/create-modal";
import checkPreviousJobsParams from "@/utils/check-previous-jobs-params";

export default async function PreviousJobs({ searchParams }: IJobsSearchParams) {
  const { highlightId, highlightStyle, ...pagination } = checkPreviousJobsParams({ searchParams });
  const projects: Project[] = _.orderBy(await ProjectService.get(pagination), ["id"], "desc");
  const lastId = (await ProjectService.getOne())?.id || 0;

  return (
    <main className="h-screen overflow-hidden">
      <NextUIProvider>
        <div className="flex min-h-screen flex-col items-center justify-start p-12 h-screen">
          <ProjectsTable
            className="mt-2"
            projects={projects.map(transformProjectToTable)}
            lastId={lastId}
            highlightId={highlightId}
            highlightStyle={highlightStyle} />
        </div>
        <CreateProjectModalBtn />
      </NextUIProvider>
    </main>
  );
}