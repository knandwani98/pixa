import { Dispatch, ReactElement, SetStateAction } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { OrderBy } from "@/types";

interface Props {
  data: {
    header: string;
    items: string[];
    headerIcon: ReactElement;
    sortFilter: OrderBy;
  };
  handleSort: (item: OrderBy) => void;
}

export const Dropdown = (props: Props) => {
  const { data, handleSort } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-gray-500 focus-visible:ring-1"
          variant={"outline"}
        >
          <span className="">{data.headerIcon}</span>
          {data.header}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{data.header}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.items.map((item) => (
          <DropdownMenuCheckboxItem
            key={item}
            className="cursor-pointer"
            checked={item === (data.sortFilter || "relevant")}
            disabled={item === (data.sortFilter || "relevant")}
            onCheckedChange={() => handleSort(item as OrderBy)}
          >
            {item[0].toUpperCase() + item.substring(1)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
