import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  Medal,
  GitBranch,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useUiStore } from "@/stores/ui-store";
import type { ResumeProfile, ResumeSection } from "../../../shared/resume-content";

type ResumeHomeProps = {
  profile: ResumeProfile;
  dataSource: string;
};

const sectionIcons = {
  robotics: Cpu,
  "AI and ML": BrainCircuit,
  "Programming": Code2,
  "CAD and manufacturing": Wrench,
};

export function ResumeHome({ profile, dataSource }: ResumeHomeProps) {
  const activeTrack = useUiStore((state) => state.activeTrack);
  const setActiveTrack = useUiStore((state) => state.setActiveTrack);

  return (
    <main id="top">
      <section className="mx-auto grid min-h-[calc(100svh-3.5rem)] w-full max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:py-14">
        <div className="flex flex-col gap-7">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" />
                {profile.location}
              </span>
              <span>{profile.education.graduation}</span>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {profile.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button nativeButton={false} render={<a href={`mailto:${profile.email}`} />} size="lg">
              <Mail />
              Email Owen
            </Button>
            <Button
              nativeButton={false}
              render={<a href={profile.github.href} target="_blank" rel="noreferrer" />}
              variant="outline"
              size="lg"
            >
              <GitBranch />
              {profile.github.display}
              <ArrowUpRight />
            </Button>
          </div>

          <div className="grid gap-3 border-y py-5 sm:grid-cols-2">
            {profile.quickFacts.map((fact) => (
              <div key={fact} className="text-sm font-medium text-foreground">
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="/robotics-workbench.png"
            alt="Robotics workbench with code, machined parts, wiring, and control electronics"
            className="aspect-[4/3] w-full rounded-lg border object-cover"
          />
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <p>Autonomous stack, controls, localization, and hardware feedback.</p>
            <p>AI and machine learning projects with model comparison and evaluation.</p>
          </div>
        </div>
      </section>

      <section className="border-y bg-card/55">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">What reviewers should notice first</h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              The resume has three strong threads: robot autonomy, AI/ML experimentation, and technical leadership.
            </p>
          </div>
          <Tabs value={activeTrack} onValueChange={setActiveTrack}>
            <TabsList variant="line" className="w-full justify-start">
              {profile.tracks.map((track) => (
                <TabsTrigger key={track.id} value={track.id} className="flex-none px-3">
                  {track.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {profile.tracks.map((track) => (
              <TabsContent key={track.id} value={track.id} className="pt-5">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em]">{track.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{track.summary}</p>
                  </div>
                  <ul className="space-y-3">
                    {track.items.map((item) => (
                      <li key={item} className="border-l-2 border-[var(--line-strong)] pl-4 leading-7">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <ResumeSectionBlock id="experience" title="Experience" sections={profile.evidence} />

      <section id="ai-collaboration" className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Bot className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">AI collaboration</h2>
            </div>
            <p className="leading-7 text-muted-foreground">{profile.aiCollaboration.summary}</p>
          </div>
          <div className="divide-y rounded-lg border bg-card">
            {profile.aiCollaboration.practices.map((practice) => (
              <ArticleRow key={practice.title} section={practice} />
            ))}
          </div>
        </div>
      </section>

      <ResumeSectionBlock id="projects" title="Projects" sections={profile.projects} />

      <section id="skills" className="border-y bg-card/55">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">Education and skills</h2>
            </div>
            <div className="space-y-2 leading-7 text-muted-foreground">
              <p className="font-medium text-foreground">{profile.education.school}</p>
              <p>{profile.education.location}</p>
              <p>{profile.education.gpa}</p>
              <p>{profile.education.graduation}</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {profile.skillGroups.map((group) => {
              const Icon = sectionIcons[group.title as keyof typeof sectionIcons] ?? Code2;

              return (
                <section key={group.title} className="rounded-lg border bg-card p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon className="size-4 text-primary" />
                    <h3 className="font-semibold tracking-[-0.02em]">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
          <div className="lg:col-start-2">
            <Separator className="mb-5" />
            <h3 className="mb-3 font-semibold tracking-[-0.02em]">Coursework</h3>
            <ul className="space-y-2 leading-7 text-muted-foreground">
              {profile.education.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 lg:grid-cols-2">
        <SummaryList icon={Medal} title="Leadership, competitions, and awards" sections={profile.awards} />
        <SummaryList icon={Wrench} title="Training" sections={profile.training} />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-14">
        <div className="flex flex-col justify-between gap-4 rounded-lg border bg-card p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold tracking-[-0.02em]">Data layer</h2>
            <p className="mt-1 text-sm text-muted-foreground">{dataSource}</p>
          </div>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Convex ready
            </TooltipTrigger>
            <TooltipContent>
              The resume profile is seeded into Convex when you run the project command.
            </TooltipContent>
          </Tooltip>
        </div>
      </section>
    </main>
  );
}

function ResumeSectionBlock({
  id,
  title,
  sections,
}: {
  id: string;
  title: string;
  sections: ResumeSection[];
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-12">
      <h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
      <div className="mt-6 divide-y rounded-lg border bg-card">
        {sections.map((section) => (
          <ArticleRow key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}

function ArticleRow({ section }: { section: ResumeSection }) {
  return (
    <article className="grid gap-4 p-5 md:grid-cols-[0.35fr_0.65fr]">
      <div>
        <h3 className="font-semibold tracking-[-0.02em]">{section.title}</h3>
        {section.context ? (
          <p className="mt-1 text-sm text-muted-foreground">{section.context}</p>
        ) : null}
      </div>
      <ul className="space-y-3 leading-7 text-muted-foreground">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function SummaryList({
  icon: Icon,
  title,
  sections,
}: {
  icon: typeof Medal;
  title: string;
  sections: ResumeSection[];
}) {
  return (
    <section className="rounded-lg border bg-card p-5">
      <div className="mb-5 flex items-center gap-3">
        <Icon className="size-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-[-0.03em]">{title}</h2>
      </div>
      <div className="space-y-5">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold tracking-[-0.02em]">{section.title}</h3>
            {section.context ? (
              <p className="mt-1 text-sm text-muted-foreground">{section.context}</p>
            ) : null}
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
