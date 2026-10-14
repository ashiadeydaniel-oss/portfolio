import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-mono text-sm text-accent">{site.location}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{site.title}</p>
        <p className="mt-6 text-balance text-muted">{site.tagline}</p>
      </div>
    </main>
  );
}
