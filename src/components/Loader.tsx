import { Loader2 } from "lucide-react";
import React, {
  ElementRef,
  LegacyRef,
  ReactNode,
  Ref,
  RefAttributes,
} from "react";

export const Loader = () => {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 bg-slate-900/5 dark:bg-slate-600/30 rounded-md"
    >
      <Loader2 className="dark:text-white animate-spin" />
    </button>
  );
};
