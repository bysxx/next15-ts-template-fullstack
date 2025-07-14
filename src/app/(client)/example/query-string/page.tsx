"use client";

import { parseAsInteger, useQueryState } from "nuqs";
import { Suspense } from "react";

function QueryStringPage() {
  const [count, setCount] = useQueryState(
    "count",
    parseAsInteger.withDefault(0)
  );
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl">Query String Example</h1>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Increment
        </button>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense>
      <QueryStringPage />
    </Suspense>
  );
}
