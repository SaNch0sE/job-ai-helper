import IProjectTable from "@/interfaces/project-table.interface";
import setSearchParams from "@/utils/set-search-params";
import IBasePagination from "@/services/interfaces/base-pagination.interface";
import SortOrder from "@/enums/sort-order.enum";

export default function getTablePagination(pathname: string, order: SortOrder, projects: IProjectTable[]) {
  return `${pathname}?${getPaginationSearchParams({
    order,
    fromId: projects.at(order === "desc" ? -1 : 0)?.id,
    skipId: true,
  })}`;
}

export function getPaginationSearchParams(pagination: IBasePagination) {
  return setSearchParams<IBasePagination>({
    order: pagination.order,
    fromId: pagination.fromId,
    skipId: pagination.skipId,
  });
}

