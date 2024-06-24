"use client"

import IProjectTable from "@/interfaces/project-table.interface";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import getTablePagination from "./utils/get-table-pagination";

export interface ITablePaginationBtnProps {
  type: "prev" | "next";
  projects: IProjectTable[];
  disabled: boolean;
}

export default function TablePaginationBtn(props: ITablePaginationBtnProps) {
  const router = useRouter();
  const pathname = usePathname();
  const url = getTablePagination(pathname, props.type === "prev" ? "asc" : "desc", props.projects);
  const label = props.type === "prev" ? "<" : ">";

  const onClick = () => (props.disabled ? pathname : router.push(url));

  if (props.disabled) {
    return <Button onClick={onClick} variant="ghost" disabled>{label}</Button>;
  }

  return <Button onClick={onClick} variant="flat">{label}</Button>;
}
