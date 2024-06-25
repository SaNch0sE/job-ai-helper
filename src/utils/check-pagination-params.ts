import PaginationSchema from "@/validation/schemas/pagination.schema";
import IPagination from "@/services/interfaces/pagination.interface";
import projectConstants from "@/components/projects/utils/constants";
import IBasePagination from "@/services/interfaces/base-pagination.interface";

export default function checkPaginationParams(searchParams: IBasePagination): IPagination {
  const validate = PaginationSchema.safeParse({
    ...searchParams,
    limit: projectConstants.tableRowLimit,
  });

  return validate.success
    ? validate.data
    : { order: 'desc', limit: projectConstants.tableRowLimit };
}
