export default function BlogsLoading() {
  return (
    <main className="min-h-screen px-6 pt-32">
      <div className="mx-auto max-w-4xl animate-pulse text-center">
        <div className="mx-auto h-8 w-32 rounded-full bg-gray-200" />
        <div className="mx-auto mt-6 h-12 max-w-xl rounded-lg bg-gray-200" />
        <div className="mx-auto mt-4 h-20 max-w-2xl rounded-lg bg-gray-100" />
      </div>
      <div className="mx-auto mt-16 max-w-6xl space-y-8">
        <div className="h-72 animate-pulse rounded-3xl bg-gray-100" />
        <div className="flex gap-3 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 w-24 shrink-0 animate-pulse rounded-full bg-gray-100"
            />
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse overflow-hidden rounded-2xl border border-gray-100"
            >
              <div className="aspect-[16/10] bg-gray-100" />
              <div className="space-y-3 p-6">
                <div className="h-4 w-3/4 rounded bg-gray-100" />
                <div className="h-4 w-full rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
