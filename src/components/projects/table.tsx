"use client"

import { Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useState } from "react";
import { useAsyncList } from "@react-stately/data";
import IProjectTable from "./interfaces/project-table.interface";

export default function ProjectsTable() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  let projects = useAsyncList<IProjectTable>({
    async load({signal, cursor}) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch('/api/projects', {
        signal,
        method: 'POST',
        body: JSON.stringify({
          limit: 10,
          fromId: cursor,
          skipId: !!cursor,
        }),
      });
      let json = await res.json();
      

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const hasMore = page < 9;
  
  return (
    <Table
    isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button isDisabled={projects.isLoading} variant="flat" onPress={projects.loadMore}>
              {projects.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
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
      isLoading={isLoading}
      items={projects.items}
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