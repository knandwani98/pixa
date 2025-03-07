/* eslint-disable jsx-a11y/alt-text */
import { ArrowUpDown, Image, LayoutPanelLeft, X } from "lucide-react";
import { Dropdown } from "./Dropdown";
import {
  DEFAULT_FILTER,
  DEFAULT_ORIENTATION,
  DEFAULT_SORT,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
} from "@/lib/constants";
import { useState, useTransition } from "react";
import { OrderBy, OrientationBy } from "@/types";
import { useRouter } from "next/navigation";
import {
  findTotal,
  toCapitalize,
  validateOrder,
  validateOrientation,
} from "@/lib/utils";

interface Props {
  total: number;
  searchQuery: string;
  searchOrder: string;
  searchOrientation: string;
}

export const TitleBar = (props: Props) => {
  const { total, searchQuery, searchOrder, searchOrientation } = props;

  const router = useRouter();

  const [isSearching, startTransition] = useTransition();

  const [sortFilter, setSortFilter] = useState<OrderBy>(
    validateOrder(searchOrder)
  );

  const [orientation, setOrientation] = useState<OrientationBy | undefined>(
    validateOrientation(searchOrientation)
  );

  const [isFilterOn, setIsFilterOn] = useState<{
    sort: boolean;
    orientation: boolean;
  }>({
    sort: !!searchOrder || DEFAULT_FILTER.sort,
    orientation: !!searchOrientation || DEFAULT_FILTER.orientation,
  });

  const handleSort = (item: OrderBy) => {
    setSortFilter(item);
    setIsFilterOn({ ...isFilterOn, sort: true });
    startTransition(() => {
      router.push(
        `?query=${searchQuery}&order=${item.toLowerCase()}${
          searchOrientation ? `&orientation=${orientation}` : ""
        }`
      );
    });
  };

  const handleOrientation = (item: OrientationBy) => {
    setOrientation(item);
    setIsFilterOn({ ...isFilterOn, orientation: true });
    startTransition(() => {
      router.push(
        `?query=${searchQuery}${
          searchOrder ? `&order=${searchOrder}` : ""
        }&orientation=${item.toLowerCase()}`
      );
    });
  };

  const removeFilter = () => {
    setSortFilter(DEFAULT_SORT);
    setOrientation(undefined);
    setIsFilterOn(DEFAULT_FILTER);
    startTransition(() => {
      router.push(`?query=${searchQuery}`);
    });
  };

  return (
    <div className="px-8 sm:flex items-center justify-between py-4 border-b-gray-200 border bg-white dark:bg-black dark:border-b-slate-700">
      {/* Total */}
      <div className="hidden sm:flex">
        {/* Label */}
        <h2 className="text-xl flex items-center justify-center gap-2">
          {/* Count */}
          <Image />
          {findTotal(total)}
        </h2>
      </div>

      <div className="flex flex-row items-center justify-between gap-2">
        {/* Clear Button */}
        {(isFilterOn.sort || isFilterOn.orientation) && (
          <button
            onClick={removeFilter}
            className="cursor-pointer text-black/60 hover:text-black dark:text-white/80 dark:hover:text-white"
          >
            <X className="w-6 text-red-600" />
          </button>
        )}

        {/* Sort Orientation */}
        <Dropdown
          data={{
            headerIcon: <LayoutPanelLeft className="w-4 h-4 mr-2" />,
            header: "Orientation",
            items: [...ORIENTATION_OPTIONS],
            filter: orientation || DEFAULT_ORIENTATION,
          }}
          setFunction={handleOrientation}
          buttonStyle="max-sm:w-full"
        />

        {/* Sort Filter */}
        <Dropdown
          data={{
            headerIcon: <ArrowUpDown className="w-4 h-4 mr-2" />,
            header: "Sort by",
            items: [...SORT_OPTIONS],
            filter: sortFilter || DEFAULT_SORT,
          }}
          setFunction={handleSort}
          buttonStyle="max-sm:w-full"
        />
      </div>
    </div>
  );
};
