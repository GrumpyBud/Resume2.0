import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  GitBranch,
  Mail,
  MapPin,
  Medal,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type {
  FeaturedWork,
  ResumeProfile,
  ResumeSection,
} from "../../../shared/resume-content";

type ResumeHomeProps = {
  profile: ResumeProfile;
};

const sectionIcons = {
  "Autonomous Systems": Cpu,
  "AI and ML Experimentation": BrainCircuit,
  "Technical Leadership": Medal,
  "Programming": Code2,
  "Robotics and embedded systems": Cpu,
  "CAD and manufacturing": Wrench,
  "AI and machine learning": BrainCircuit,
};

export function ResumeHome({ profile }: ResumeHomeProps) {
  return (
    <main id="top">
      <section className="mx-auto grid min-h-[calc(100svh-3.5rem)] w-full max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-14">
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
              <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-balance sm:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-[42rem] text-lg leading-8 text-muted-foreground sm:text-xl">
                {profile.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="/resume.pdf" download />}
              size="lg"
              className="h-11"
            >
              <Download />
              Download Resume
            </Button>
            <Button
              nativeButton={false}
              render={<a href={profile.github.href} target="_blank" rel="noreferrer" />}
              variant="outline"
              size="lg"
              className="h-11"
            >
              <GitBranch />
              GitHub
              <ArrowUpRight />
            </Button>
            <Button
              nativeButton={false}
              render={<a href={`mailto:${profile.email}`} />}
              variant="outline"
              size="lg"
              className="h-11"
            >
              <Mail />
              Email Owen
            </Button>
          </div>
        </div>

        <aside aria-label="Resume proof points" className="rounded-lg border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-normal text-muted-foreground">
            Proof points
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {profile.quickFacts.map((fact) => (
              <div key={fact} className="rounded-md border bg-background p-4">
                <p className="text-sm font-semibold leading-6 text-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="work" className="border-y bg-card/55">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 lg:py-20">
          <SectionIntro
            eyebrow="Featured Work"
            title="Field-tested software, model evaluation, and real projects."
            body="Featured engineering work across robot autonomy, ML experimentation, embedded systems, and local AI tools."
          />
          <div className="mt-8 grid gap-5">
            {profile.featuredWork.map((project, index) => (
              <FeaturedWorkCard key={project.title} project={project} priority={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 lg:py-20">
        <SectionIntro
          eyebrow="Technical Focus"
          title="Robot autonomy, ML experiments, and technical leadership."
          body="My work connects robot autonomy, AI/ML experimentation, and technical leadership. I focus on systems that survive real-world constraints, from field-tested robot code to model evaluation and hands-on mentoring."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {profile.technicalFocus.map((section) => (
            <FocusCard key={section.title} section={section} />
          ))}
        </div>
      </section>

      <ResumeSectionBlock id="experience" title="Experience" sections={profile.evidence} />

      <section id="recognition" className="mx-auto w-full max-w-6xl px-5 py-14 lg:py-20">
        <h2 className="text-2xl font-semibold tracking-normal sm:text-3xl">Recognition</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {profile.recognition.map((section) => (
            <RecognitionCard key={section.title} section={section} />
          ))}
        </div>
      </section>

      <section id="skills" className="border-y bg-card/55">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold tracking-normal">Education and Coursework</h2>
            </div>
            <div className="space-y-2 leading-7 text-muted-foreground">
              <p className="font-medium text-foreground">{profile.education.school}</p>
              <p>{profile.education.location}</p>
              <p>{profile.education.gpa}</p>
              <p>{profile.education.graduation}</p>
            </div>
            <div className="mt-7">
              <h3 className="font-semibold tracking-normal">Coursework</h3>
              <ul className="mt-3 space-y-2 leading-7 text-muted-foreground">
                {profile.education.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-normal">Skills</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {profile.skillGroups.map((group) => (
                <SkillCard key={group.title} group={group} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto w-full max-w-6xl px-5 py-14 lg:py-20">
        <div className="grid gap-8 rounded-lg border bg-card p-5 md:p-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">Engineering Workflow</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              {profile.engineeringWorkflow.summary}
            </p>
          </div>
          <ul className="grid gap-3">
            {profile.engineeringWorkflow.items.map((item) => (
              <li key={item} className="rounded-md border bg-background p-4 leading-7 text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold tracking-normal">Contact</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            Robotics software, ML, and engineering projects.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button nativeButton={false} render={<a href={`mailto:${profile.email}`} />} className="h-11">
              <Mail />
              Email
            </Button>
            <Button
              nativeButton={false}
              render={<a href={profile.github.href} target="_blank" rel="noreferrer" />}
              variant="outline"
              className="h-11"
            >
              <GitBranch />
              GitHub
              <ArrowUpRight />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="/resume.pdf" download />}
              variant="outline"
              className="h-11"
            >
              <Download />
              Resume
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-normal text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-[44rem] leading-7 text-muted-foreground">{body}</p>
    </div>
  );
}

function FeaturedWorkCard({
  project,
  priority,
}: {
  project: FeaturedWork;
  priority: number;
}) {
  return (
    <article className="rounded-lg border bg-card p-5 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="text-sm font-medium text-primary">0{priority}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-normal">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.context}</p>
          <p className="mt-4 leading-7 text-muted-foreground">{project.subtitle}</p>
          {project.role ? (
            <MetaLine label="Role" value={project.role} />
          ) : null}
          {project.stack ? (
            <MetaLine label="Stack" value={project.stack} />
          ) : null}
        </div>
        <div>
          <h4 className="font-semibold tracking-normal">Technical Highlights</h4>
          <ul className="mt-3 space-y-3 pl-5 leading-7 text-muted-foreground [&>li]:list-disc [&>li]:marker:text-primary">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          {project.outcome ? (
            <p className="mt-5 border-l-2 border-[var(--line-strong)] pl-4 leading-7 text-muted-foreground">
              <span className="font-medium text-foreground">Outcome: </span>
              {project.outcome}
            </p>
          ) : null}
          {project.note ? (
            <p className="mt-5 rounded-md border bg-background p-3 text-sm leading-6 text-muted-foreground">
              {project.note}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <p className="mt-4 text-sm leading-6 text-muted-foreground">
      <span className="font-medium text-foreground">{label}: </span>
      {value}
    </p>
  );
}

function FocusCard({ section }: { section: ResumeSection }) {
  const Icon = sectionIcons[section.title as keyof typeof sectionIcons] ?? Code2;

  return (
    <article className="rounded-lg border bg-card p-5">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="size-5 text-primary" />
        <h3 className="font-semibold tracking-normal">{section.title}</h3>
      </div>
      <p className="leading-7 text-muted-foreground">{section.items[0]}</p>
    </article>
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
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-14 lg:py-20">
      <h2 className="text-2xl font-semibold tracking-normal sm:text-3xl">{title}</h2>
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
    <article className="grid gap-4 p-5 md:grid-cols-[0.35fr_0.65fr] md:p-6">
      <div>
        <h3 className="font-semibold tracking-normal">{section.title}</h3>
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

function RecognitionCard({ section }: { section: ResumeSection }) {
  return (
    <article className="rounded-lg border bg-card p-5 md:p-6">
      <h3 className="font-semibold tracking-normal">{section.title}</h3>
      <ul className="mt-3 space-y-2 pl-5 leading-7 text-muted-foreground [&>li]:list-disc [&>li]:marker:text-primary">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function SkillCard({ group }: { group: ResumeSection }) {
  const Icon = sectionIcons[group.title as keyof typeof sectionIcons] ?? Code2;

  return (
    <section className="rounded-lg border bg-card p-5">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="size-4 text-primary" />
        <h3 className="font-semibold tracking-normal">{group.title}</h3>
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-muted-foreground">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
