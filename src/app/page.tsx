import { CardGrid } from "@/components/CardGrid";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = searchParams?.query;

  if (Array.isArray(searchQuery)) return null;

  return (
    <main className="">
      <CardGrid searchQuery={searchQuery!} className="pt-8 px-8" />
    </main>
  );
}
