export default function BlogPostLoading() {
  return (
    <main className="min-h-screen px-6 pt-28">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="h-4 w-32 rounded bg-gray-100" />
        <div className="mx-auto mt-10 h-10 w-2/3 rounded-lg bg-gray-200" />
        <div className="mx-auto mt-4 h-4 w-48 rounded bg-gray-100" />
      </div>
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="aspect-[21/9] animate-pulse rounded-3xl bg-gray-100" />
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-4 animate-pulse">
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-5/6 rounded bg-gray-100" />
      </div>
    </main>
  );
}
