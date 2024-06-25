import { Prisma } from "@prisma/client";

export default interface IBasePagination {
  order: Prisma.SortOrder;

  fromId?: number;

  skipId?: boolean;
}
