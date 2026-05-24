import { Outlet } from "react-router";

import { SiteHeader } from "@/components/site/site-header";

export function RootRoute() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Outlet />
      <footer className="border-t bg-background/80 px-5 py-8 text-sm text-muted-foreground">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Owen Tharp</p>
          <p>Built with React Router, Vite, Tailwind, shadcn Base UI, Convex, and Bun.</p>
        </div>
      </footer>
    </div>
  );
}
