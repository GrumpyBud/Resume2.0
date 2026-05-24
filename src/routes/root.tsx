import { Outlet } from "react-router";

import { SiteHeader } from "@/components/site/site-header";

export function RootRoute() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Outlet />
      <footer className="border-t bg-background/80 px-5 py-8 text-sm text-muted-foreground">
        <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-medium text-foreground">Owen Tharp</p>
            <p className="mt-1">Robotics software, ML, and engineering projects.</p>
            <p className="mt-3">Built with React, TypeScript, Tailwind, and Vercel.</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="mailto:tharp.owen001@gmail.com" className="hover:text-foreground">
              Email
            </a>
            <a
              href="https://github.com/GrumpyBud"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a href="/resume.pdf" download className="hover:text-foreground">
              Resume
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
