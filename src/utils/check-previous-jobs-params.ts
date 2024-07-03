import PaginationSchema from "@/validation/schemas/pagination.schema";
import projectConstants from "@/components/projects/utils/constants";
import HighlightIdSchema from "@/validation/schemas/highlight-id.schema";
import IJobsSearchParams from "@/interfaces/jobs-search-params.interface";
import SortOrder from "@/enums/sort-order.enum";

export default function checkPreviousJobsParams({ searchParams }: IJobsSearchParams) {
  const validatePagination = PaginationSchema.safeParse({
    ...searchParams,
    limit: projectConstants.tableRowLimit,
  });

  const validateHighlightId = HighlightIdSchema.safeParse({
    highlightId: searchParams.highlightId,
    highlightStyle: searchParams.highlightStyle,
  });
  const [highlightId, highlightStyle] = [
    validateHighlightId.data?.highlightId || 0,
    validateHighlightId.data?.highlightStyle,
  ];

  return validatePagination.success
    ? { ...validatePagination.data, highlightId, highlightStyle }
    : { order: SortOrder.desc, limit: projectConstants.tableRowLimit, highlightId, highlightStyle };
}
