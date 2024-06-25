import PaginationSchema from "@/validation/schemas/pagination.schema";
import projectConstants from "@/components/projects/utils/constants";
import HighlightIdSchema from "@/validation/schemas/highlight-id.schema";
import { Prisma } from "@prisma/client";
import IJobsSearchParams from "@/interfaces/jobs-search-params.interface";

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
    : { order: Prisma.SortOrder.desc, limit: projectConstants.tableRowLimit, highlightId, highlightStyle };
}
