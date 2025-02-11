"use client";
import {flexRender} from "@tanstack/react-table";
import {useDataTableContext} from "@zenncore/components/data-table";
import type {ClassList} from "@zenncore/types";
import {cn} from "@zenncore/utils";
import {AnimatePresence, motion} from "framer-motion";
import {Fragment} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "./data-table-primitive";

type DataTableSector = "row" | "cell" | "footer" | "table";
type DataTablePosition = "header" | "body" | "footer";
type DataTableClassListKey =
  | `${DataTablePosition}-${DataTableSector}`
  | "table";

export type DataTableProps = {
  classList?: ClassList<DataTableClassListKey>;
  className?: string;
};
export const DataTable = ({ className, classList }: DataTableProps) => {
  const { table } = useDataTableContext();
  return (
    <Table className={className}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className={cn(
                    "whitespace-nowrap",
                    classList?.["header-cell"],
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => {
            const rowData = row.original;

            return (
              <Fragment key={row.original.id}>
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  className="relative z-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={classList?.["body-cell"]}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                <AnimatePresence>
                  {rowData.content && rowData.isContentShown && (
                    <motion.tr
                      key={rowData.id}
                      className={cn(
                        "-z-[10] border-border border-b transition-colors odd:bg-background-dimmed hover:bg-accent-rich data-[state=selected]:bg-accent-rich",
                      )}
                    >
                      <TableCell
                        colSpan={Object.keys(rowData).length}
                        className={cn("p-0", classList?.["body-cell"])}
                      >
                        <motion.div
                          key={rowData.id}
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          {rowData.content}
                        </motion.div>
                      </TableCell>
                    </motion.tr>
                  )}
                </AnimatePresence>
              </Fragment>
            );
          })
        ) : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className={cn("h-24 text-center")}
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
