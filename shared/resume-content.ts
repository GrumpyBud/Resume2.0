export type ResumeLink = {
  label: string;
  href: string;
  display: string;
};

export type ResumeSection = {
  title: string;
  context?: string;
  items: string[];
};

export type ResumeTrack = {
  id: string;
  label: string;
  title: string;
  summary: string;
  items: string[];
};

export type ResumeProfile = {
  slug: string;
  name: string;
  location: string;
  email: string;
  github: ResumeLink;
  summary: string;
  quickFacts: string[];
  education: {
    school: string;
    location: string;
    graduation: string;
    gpa: string;
    coursework: string[];
  };
  skillGroups: ResumeSection[];
  evidence: ResumeSection[];
  aiCollaboration: {
    summary: string;
    practices: ResumeSection[];
  };
  projects: ResumeSection[];
  awards: ResumeSection[];
  training: ResumeSection[];
  tracks: ResumeTrack[];
};

export const resumeProfile = {
  slug: "owen-tharp",
  name: "Owen Tharp",
  location: "Andersonville, TN",
  email: "tharp.owen001@gmail.com",
  github: {
    label: "GitHub",
    href: "https://github.com/GrumpyBud",
    display: "github.com/GrumpyBud",
  },
  summary:
    "Robotics programmer and AI/ML builder focused on autonomous systems, controls, computer vision, and practical engineering. I write software, teach teammates, test on real hardware, and connect code to CAD, machining, and match strategy.",
  quickFacts: [
    "Head Programmer, FRC Team 1466",
    "1st place, Division C Competitive CAD",
    "Autonomous localization near 0.05 m",
    "Cisco Hack Camp top project presenter",
  ],
  education: {
    school: "Webb School of Knoxville",
    location: "Knoxville, TN",
    graduation: "Expected graduation: May 2028",
    gpa: "4.50 weighted / 4.00 unweighted",
    coursework: [
      "AP Computer Science A, 100% average and peer tutoring",
      "Honors Quantum Computing",
      "Honors Drone Technology and Aviation, autonomous delivery research project",
    ],
  },
  skillGroups: [
    {
      title: "Programming",
      items: ["Java", "Python", "C++", "TypeScript", "React"],
    },
    {
      title: "Robotics and embedded systems",
      items: [
        "WPILib Java",
        "RoboRIO",
        "Raspberry Pi",
        "Orange Pi",
        "ESP32",
        "sensor integration",
        "control systems",
      ],
    },
    {
      title: "CAD and manufacturing",
      items: [
        "Onshape",
        "Fusion 360 CAM",
        "SolidWorks fundamentals",
        "CNC machining workflow",
      ],
    },
    {
      title: "AI and machine learning",
      items: [
        "PyTorch",
        "TensorFlow/Keras",
        "CNNs",
        "Vision Transformers",
        "model evaluation",
        "Google Colab",
        "speech-to-text and text-to-speech pipelines",
      ],
    },
  ],
  evidence: [
    {
      title: "Autonomous robot software",
      context: "FRC Team 1466",
      items: [
        "Led development of a WPILib Java autonomous stack using Choreo trajectories, PIDF-controlled mechanisms, AprilTag-based 3D localization, and command-based sequencing.",
        "Kept localization accuracy near 0.05 meters and 0.1 radians during robot operation through vision integration, pose estimation, and drivetrain feedback.",
        "Built a finite-state coordination layer for scoring, intake, and handoff workflows so autonomous and teleoperated routines could share robot-state architecture.",
      ],
    },
    {
      title: "Technical leadership",
      context: "Robotics teaching and competition",
      items: [
        "Led and taught a 6-student programming group with 8 technical slide decks on robot software, controls, localization, and debugging.",
        "Co-led FTC Team 9934, a 15+ member team that won the 2024 Tennessee FTC State Championship.",
        "Helped connect CAD, programming, driver feedback, and match strategy into buildable robot systems.",
      ],
    },
    {
      title: "Engineering breadth",
      context: "Code, CAD, CAM, and hardware",
      items: [
        "Designed robot mechanisms in Onshape, generated CAM in Fusion 360, and manufactured CNC parts for off-season projects.",
        "Contributed to an FRC program recognized with the 2025 FIRST Engineering Inspiration Award and 2026 Judges Award.",
        "Qualified for the FRC World Championship and competed with teams from more than 35 countries.",
      ],
    },
  ],
  aiCollaboration: {
    summary:
      "AI sits in my engineering loop. I use it to compress docs, compare APIs, draft test ideas, inspect failure modes, and review code paths. I read the source, run the code, and make the final technical call.",
    practices: [
      {
        title: "Faster debugging",
        items: [
          "I use AI to turn logs, symptoms, and subsystem behavior into a short list of likely causes, then verify each one with telemetry, tests, or hardware checks.",
          "For robotics code, I keep ownership of command structure, state machines, sensor assumptions, and final robot behavior.",
        ],
      },
      {
        title: "Sharper learning loops",
        items: [
          "I ask AI to explain unfamiliar APIs, summarize documentation, and compare implementation options before I write or revise code.",
          "I use the saved time to run more experiments, read deeper into source material, and test edge cases I might otherwise miss.",
        ],
      },
      {
        title: "Better review habits",
        items: [
          "I use AI as a second reviewer for naming, type safety, missing cases, and clarity, especially in TypeScript, Python, Java, and C++ projects.",
          "I treat AI output as a draft. I keep the design decisions, integration work, and correctness checks with me.",
        ],
      },
    ],
  },
  projects: [
    {
      title: "Harvard AI Bootcamp",
      context: "Summer 2025",
      items: [
        "Built breast-cancer image classifiers in PyTorch using a curated benign vs. malignant dataset from the Kaggle Multi Cancer Dataset.",
        "Compared a custom CNN, ResNet18 transfer-learning model, and Vision Transformer while tuning learning rate, batch size, epochs, augmentation, and architecture choices.",
        "Reached up to 99.25% validation accuracy and visualized training and validation behavior to compare convergence and diagnose overfitting.",
      ],
    },
    {
      title: "Cisco Hack Camp",
      context: "Summer 2025",
      items: [
        "Built a solo ESP32-based bidirectional Morse code translator in C++.",
        "Implemented visual, keyboard, and tap input modes with real-time translation and WebSocket-based networked communication.",
        "Selected by mentors and Cisco employees as the top project presenter and invited back as the only student mentor in the program's history.",
      ],
    },
    {
      title: "Artificial Intelligence Visual Assistant",
      context: "Independent project, Spring 2024",
      items: [
        "Built a local Python-based AI assistant with persistent user memory stored in structured JSON.",
        "Integrated OpenAI Whisper, GPT-3.5 Turbo, OpenAI text-to-speech, and NVIDIA Audio2Face into a real-time conversational avatar pipeline.",
        "Deployed the system with multi-user support, tested it across about 20 users, and presented it to the K-12 school community.",
      ],
    },
  ],
  awards: [
    {
      title: "Science Olympiad",
      context: "Fall 2023 to present",
      items: [
        "Awarded 1st place in Division C Competitive CAD.",
        "Awarded 3rd place in Division C Windmill.",
      ],
    },
    {
      title: "TMTA Mathematics Competition",
      context: "2022 to present",
      items: [
        "Awarded 3rd place in Precalculus and Algebra II.",
      ],
    },
    {
      title: "STEM mentorship and outreach",
      context: "Summer 2024 to present",
      items: [
        "Mentored FLL and FTC teams in programming fundamentals, systems thinking, and engineering iteration.",
        "Served as an Engineering Mentor at Camp Webb in 2024 and 2025, teaching Sumobots and Code Build Create programs for about 40 lower school students.",
      ],
    },
  ],
  training: [
    {
      title: "America's Cutting Edge CNC Machining Training Program",
      items: [
        "Completed ACE CNC machining training covering foundational manufacturing concepts and machining workflow.",
      ],
    },
  ],
  tracks: [
    {
      id: "robotics",
      label: "Robotics",
      title: "Autonomous systems with real-world constraints",
      summary:
        "The strongest signal is robot software that survives the gap between a clean idea and a field-tested match routine.",
      items: [
        "WPILib Java autonomous stack with Choreo, PIDF mechanisms, AprilTags, pose estimation, and command sequencing.",
        "Shared state architecture across autonomous and teleoperated scoring, intake, and handoff routines.",
        "Hardware-aware work across CAD, CAM, CNC parts, sensors, drivetrain feedback, and driver input.",
      ],
    },
    {
      id: "ai",
      label: "AI and ML",
      title: "Model work paired with disciplined evaluation",
      summary:
        "AI projects show practical model comparison, data handling, and real-time multimodal systems rather than surface-level demos.",
      items: [
        "PyTorch image classification with CNN, ResNet18 transfer learning, and Vision Transformer comparisons.",
        "Training curves and validation behavior used to diagnose overfitting and convergence.",
        "Independent AI assistant combining speech recognition, LLM output, text-to-speech, avatar animation, and persistent memory.",
      ],
    },
    {
      id: "leadership",
      label: "Leadership",
      title: "Teaching, presenting, and building with a team",
      summary:
        "The resume has a clear peer-leadership thread: teaching code, translating design goals, and carrying projects through demos and competitions.",
      items: [
        "Led a 6-student programming group and created 8 technical lesson decks.",
        "Co-led a state championship FTC team and coordinated design, code, testing, and match strategy.",
        "Mentored younger robotics students and taught engineering programs at Camp Webb.",
      ],
    },
  ],
} satisfies ResumeProfile;
