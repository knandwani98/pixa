import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadMore } from "@/components/Homepage/LoadMore";

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = searchParams?.query;
  const searchOrder = searchParams?.order;
  const searchOrientation = searchParams?.orientation;

  if (Array.isArray(searchQuery)) return null;
  if (Array.isArray(searchOrder)) return null;
  if (Array.isArray(searchOrientation)) return null;

  return (
    <>
      <Header searchQuery={searchQuery} />
      <main className="min-h-screen">
        <LoadMore
          searchQuery={searchQuery!}
          searchOrder={searchOrder!}
          searchOrientation={searchOrientation!}
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
