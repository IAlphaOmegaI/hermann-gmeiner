"use client";

import { useDataTableContext } from "@zenncore/components/data-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "@zennui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { textBlurAnimationConfig } from "../_animations";
import { Button } from "../button";

export const DataTablePagination = () => {
  const { pagination } = useDataTableContext();

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <AnimatePresence mode="wait">
          <motion.h3
            key={pagination.pageIndex}
            {...textBlurAnimationConfig}
            transition={{
              duration: 0.3,
              delay: 0,
            }}
            className="tabular-nums"
          >
            {pagination.pageIndex}
          </motion.h3>
        </AnimatePresence>
        <h3>/</h3>
        <h3 key="page-count" className="tabular-nums">
          {pagination.pageCount}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="soft"
          onClick={pagination.goToFirstPage}
          disabled={!pagination.canGoPreviousPage}
        >
          <ChevronsLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="soft"
          onClick={pagination.goToPreviousPage}
          disabled={!pagination.canGoPreviousPage}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="soft"
          onClick={pagination.goToNextPage}
          disabled={!pagination.canGoNextPage}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          size="icon"
          variant="soft"
          onClick={pagination.goToLastPage}
          disabled={!pagination.canGoNextPage}
        >
          <ChevronsRightIcon />
        </Button>
      </div>
    </div>
  );
};
