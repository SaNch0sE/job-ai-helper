import IProjectTable from "@/interfaces/project-table.interface";
import setSearchParams from "@/utils/set-search-params";
import IPagination from "@/services/interfaces/pagination.interface";
import { Prisma } from "@prisma/client";
import projectConstants from "./constants";

export default function getTablePagination(pathname: string, order: Prisma.SortOrder, projects: IProjectTable[]) {
  return `${pathname}?${setSearchParams<IPagination>({
    order,
    limit: projectConstants.tableRowLimit,
    fromId: projects.at(order === "desc" ? -1 : 0)?.id,
    skipId: true,
  })}`;
}
