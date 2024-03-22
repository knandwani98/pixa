import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black dark:bg-slate-800/40 mt-8 text-white">
      <p className="flex-center gap-2 py-4 text-white/80">
        Made with
        <span>
          <Heart
            className="h-6 w-6 fill-white/80 hover:fill-white"
            strokeWidth={0}
          />
        </span>
        by
        <a
          target="_black"
          href="https://github.com/knandwani98"
          className="font-semibold hover:text-white"
        >
          Kushal Nandwani{" "}
        </a>
      </p>
    </footer>
  );
};
