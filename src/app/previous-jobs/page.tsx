import CreateProjectModalBtn from "@/components/projects/create-modal";
import ProjectsTable from "@/components/projects/table";
import transformProjectToTable from "@/components/projects/utils/transform-project-to-table";
import Project from "@/interfaces/project.interface";
import checkPreviousJobsParams from "@/utils/check-previous-jobs-params";
import { NextUIProvider } from "@nextui-org/react";
import _ from "lodash";
import IJobsSearchParams from "@/interfaces/jobs-search-params.interface";
import { projectService } from "@/services/projects/projects.service";

export default async function PreviousJobs({ searchParams }: IJobsSearchParams) {
  const { highlightId, highlightStyle, ...pagination } = checkPreviousJobsParams({ searchParams });
  const projects: Project[] = _.orderBy(await projectService.get(pagination), ["id"], "desc");
  const lastId = (await projectService.getOne())?.id || 0;

  return (
    <main className="h-screen overflow-hidden">
      <NextUIProvider>
        <div className="flex min-h-screen flex-col items-center justify-start p-12 h-screen">
          <ProjectsTable
            className="mt-2"
            projects={projects.map((prj) => transformProjectToTable(prj))}
            projectsShort={projects.map((prj) => transformProjectToTable(prj, true))}
            lastId={lastId}
            highlightId={highlightId}
            highlightStyle={highlightStyle} />
        </div>
        <CreateProjectModalBtn />
      </NextUIProvider>
    </main>
  );
}
