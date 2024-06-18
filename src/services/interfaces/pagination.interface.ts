import { Prisma } from "@prisma/client";

export default interface IPagination {
  limit: number;

  order: Prisma.SortOrder;

  fromId?: number;

  skipId?: boolean;
}
