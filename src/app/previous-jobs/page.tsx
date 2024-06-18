import ProjectsTable from "@/components/projects/table";
import { NextUIProvider } from "@nextui-org/react";

export default function PreviousJobs() {
  return (
    <>
      <NextUIProvider>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
          <ProjectsTable />
        </div>
      </NextUIProvider>
    </>
  );
}