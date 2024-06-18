import ProjectsTable from "@/components/projects/table";
import { NextUIProvider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export default function PreviousJobs() {
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <NextUIProvider>
        {/* Main navigation panel */}
        <div className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
          <ProjectsTable />
        </div>
        {/* Page navigation panel */}
      </NextUIProvider>
    </>
  );
}