import IBasePagination from "@/services/interfaces/base-pagination.interface";
import IHighlightRow from "./highlight-row.interface";

export default interface IJobsSearchParams {
  searchParams: IBasePagination & Partial<IHighlightRow>;
}