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
import { cn, toCapitalize } from "@/lib/utils";

interface Props {
  noTitle?: boolean;
  buttonStyle?: string;
  data: {
    header: string;
    items: string[];
    otherItems?: string[];
    headerIcon: ReactElement;
    filter?: string;
  };
  setFunction: (item: any) => void;
}

export const Dropdown = (props: Props) => {
  const { noTitle, buttonStyle, data, setFunction } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "text-gray-500 font-normal focus-visible:ring-1 max-sm:w-full",
            buttonStyle
          )}
          variant={"outline"}
        >
          <span>{data.headerIcon}</span>
          <span className="hidden sm:flex">{noTitle ? "" : data.header}</span>
          <span className="ml-1 font-semibold text-black/70 dark:text-white">
            {data.filter ? toCapitalize(data.filter) : ""}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="w-56">
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

        {data?.otherItems && <DropdownMenuSeparator />}

        {data?.otherItems?.map((item) => (
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
