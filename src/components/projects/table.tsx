"use client"

import { Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import IProjectTable from "@/interfaces/project-table.interface";
import nullString from "./utils/null-string";

export interface IProjectsTableProps { projects: IProjectTable[] };

export default function ProjectsTable({ projects }: IProjectsTableProps) {
  return (
    <Table
    isHeaderSticky
      aria-label="Projects table"
      bottomContent={
          <div className="flex w-full justify-center">
            <Button variant="flat">
              Prev
            </Button>
            <Button variant="flat">
              Next
            </Button>
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
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody
      items={projects}
      loadingContent={<Spinner label="Loading..." />}
      >
        {(item) =>
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.features}</TableCell>
          <TableCell>{item.techstack}</TableCell>
          <TableCell>{item.links}</TableCell>
          <TableCell>{item.dateModified}</TableCell>
          <TableCell>{item.dateCreated}</TableCell>
          <TableCell><Button>Update</Button>|<Button>Delete</Button></TableCell>
        </TableRow>}
      </TableBody>
    </Table>
  );
};