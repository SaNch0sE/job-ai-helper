import IBasePagination from "./base-pagination.interface";

export default interface IPagination extends IBasePagination {
  limit: number;
}
