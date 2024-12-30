import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="dark:bg-black bg-slate-100 mt-8 shadow-xl">
      <p className="flex items-center justify-center gap-2 py-4">
        Made with
        <span>
          <Heart
            className="h-6 w-6 fill-red-700/80 hover:fill-red-700"
            strokeWidth={0}
          />
        </span>
        by
        <a
          target="_black"
          href="https://github.com/knandwani98"
          className="font-semibold"
        >
          Kushal Nandwani
        </a>
      </p>
    </footer>
  );
};
