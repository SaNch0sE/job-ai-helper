import SortOrder from "@/enums/sort-order.enum";

export default interface IBasePagination {
  order: SortOrder;

  fromId?: number;

  skipId?: boolean;
}
