import { ReactElement } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toCapitalize } from "@/lib/utils";

interface Props {
  data: {
    header: string;
    items: string[];
    headerIcon: ReactElement;
    filter?: string;
  };
  setFunction: (item: any) => void;
}

export const Dropdown = (props: Props) => {
  const { data, setFunction } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-gray-500 font-normal focus-visible:ring-1 max-sm:w-full"
          variant={"outline"}
        >
          <span>{data.headerIcon}</span>
          <span className="hidden sm:flex">{data.header}</span>
          <span className="ml-1 font-semibold text-black/70 dark:text-white">
            {data.filter ? toCapitalize(data.filter) : "all"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{data.header}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.items.map((item) => (
          <DropdownMenuCheckboxItem
            key={item}
            className="cursor-pointer"
            checked={item === data.filter}
            disabled={item === data.filter}
            onCheckedChange={() => setFunction(item)}
          >
            {toCapitalize(item)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
