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
          className="text-gray-500 font-normal focus-visible:ring-1"
          variant={"outline"}
        >
          <span className="">{data.headerIcon}</span>
          {data.header}
          <span className="ml-1 font-semibold text-black/70 dark:text-white">
            {data.filter
              ? data.filter[0].toUpperCase() + data.filter?.substring(1)
              : "all"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{data.header}</DropdownMenuLabel>

        {data.items.map((item) => (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              key={item}
              className="cursor-pointer"
              checked={item === data.filter}
              disabled={item === data.filter}
              onCheckedChange={() => setFunction(item)}
            >
              {item[0].toUpperCase() + item.substring(1)}
            </DropdownMenuCheckboxItem>
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
