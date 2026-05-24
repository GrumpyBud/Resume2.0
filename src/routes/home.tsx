import { useQuery } from "convex/react";

import { ResumeHome } from "@/components/site/resume-home";
import { convexClient } from "@/lib/convex";
import { api } from "../../convex/_generated/api";
import { resumeProfile, type ResumeProfile } from "../../shared/resume-content";

export function HomeRoute() {
  if (!convexClient) {
    return <ResumeHome profile={resumeProfile} dataSource="Local fallback until Convex is configured" />;
  }

  return <ConvexResumeHome />;
}

function ConvexResumeHome() {
  const profile = useQuery(api.resume.getProfile) as ResumeProfile | undefined;

  return (
    <ResumeHome
      profile={profile ?? resumeProfile}
      dataSource={profile ? "Convex live query" : "Loading Convex data"}
    />
  );
}
