import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { convexClient } from "@/lib/convex";

type AppProvidersProps = {
  children: ReactNode;
};

function ShellProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        {children}
        <Toaster position="top-right" closeButton />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export function AppProviders({ children }: AppProvidersProps) {
  if (!convexClient) {
    return <ShellProviders>{children}</ShellProviders>;
  }

  return (
    <ConvexAuthProvider client={convexClient}>
      <ShellProviders>{children}</ShellProviders>
    </ConvexAuthProvider>
  );
}
