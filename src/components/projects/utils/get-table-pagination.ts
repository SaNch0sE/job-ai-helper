import IProjectTable from "@/interfaces/project-table.interface";
import setSearchParams from "@/utils/set-search-params";
import { Prisma } from "@prisma/client";
import IBasePagination from "@/services/interfaces/base-pagination.interface";

export default function getTablePagination(pathname: string, order: Prisma.SortOrder, projects: IProjectTable[]) {
  return `${pathname}?${setSearchParams<IBasePagination>({
    order,
    fromId: projects.at(order === "desc" ? -1 : 0)?.id,
    skipId: true,
  })}`;
}
