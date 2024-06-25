"use client"

import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import IProjectTable from "@/interfaces/project-table.interface";
import TablePaginationBtn from "./pagination-button";
import ViewProjectModalBtn from "./view-modal";
import IHighlightRow from "@/interfaces/highlight-row.interface";

export interface IProjectsTableProps extends Partial<IHighlightRow> {
  projects: IProjectTable[],
  lastId: number,
  className: string,
};

export default function ProjectsTable({ projects, lastId, className, highlightId, highlightStyle }: IProjectsTableProps) {
  // TODO: Use new style option to apply custom classNames on created OR updated rows
  console.log(highlightId, highlightStyle);

  return (
    <Table
    className={className}
    isCompact
    isHeaderSticky
      aria-label="Projects table"
      bottomContent={
          <div className="flex w-full justify-center">
            <TablePaginationBtn type="prev" projects={projects} disabled={projects.at(0)?.id === lastId} />
            <TablePaginationBtn type="next" projects={projects} disabled={projects.at(-1)?.id === 1} />
          </div>
      }
      classNames={{
        base: "max-h-[520px]",
        table: "min-h-[420px]",
      }}
      >
      <TableHeader>
        <TableColumn>Id</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Features</TableColumn>
        <TableColumn>Tech Stack</TableColumn>
        <TableColumn>Links</TableColumn>
        <TableColumn>Modified</TableColumn>
        <TableColumn>Created</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody
      items={projects}
      loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => 
        <TableRow className={highlightId === item.id ? 'bg-green-800' : ''} key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.features}</TableCell>
          <TableCell>{item.techstack}</TableCell>
          <TableCell>{item.links}</TableCell>
          <TableCell>{item.dateModified}</TableCell>
          <TableCell>{item.dateCreated}</TableCell>
          <TableCell><ViewProjectModalBtn item={item} /></TableCell>
        </TableRow>}
      </TableBody>
    </Table>
  );
};


