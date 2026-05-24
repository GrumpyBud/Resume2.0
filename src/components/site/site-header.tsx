import { Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUiStore } from "@/stores/ui-store";
import { ThemeMenu } from "./theme-menu";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Recognition", href: "#recognition" },
  { label: "Skills", href: "#skills" },
];

export function SiteHeader() {
  const mobileNavOpen = useUiStore((state) => state.mobileNavOpen);
  const setMobileNavOpen = useUiStore((state) => state.setMobileNavOpen);

  return (
    <header className="no-print sticky top-0 z-40 border-b bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-sm font-semibold tracking-normal">
          Owen Tharp
        </a>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href="/resume.pdf" download aria-label="Download resume PDF" />}
            variant="outline"
            className="hidden h-9 md:inline-flex"
          >
            <Download />
            Resume
          </Button>
          <ThemeMenu />
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger render={<Button className="md:hidden" variant="outline" size="icon-lg" />}>
              <Menu />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent className="w-72" side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetClose render={<Button variant="ghost" size="icon" />}>
                  <X />
                  <span className="sr-only">Close navigation</span>
                </SheetClose>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 text-sm">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-md px-2 py-2 font-medium text-foreground hover:bg-muted"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Download className="size-4" />
                  Resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
