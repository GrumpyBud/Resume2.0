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

export type FeaturedWork = {
  title: string;
  context: string;
  subtitle: string;
  role?: string;
  stack?: string;
  highlights: string[];
  outcome?: string;
  note?: string;
};

export type ResumeProfile = {
  slug: string;
  name: string;
  location: string;
  email: string;
  github: ResumeLink;
  summary: string;
  quickFacts: string[];
  featuredWork: FeaturedWork[];
  technicalFocus: ResumeSection[];
  education: {
    school: string;
    location: string;
    graduation: string;
    gpa: string;
    coursework: string[];
  };
  skillGroups: ResumeSection[];
  evidence: ResumeSection[];
  engineeringWorkflow: {
    summary: string;
    items: string[];
  };
  recognition: ResumeSection[];
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
    "Robotics software developer focused on autonomous systems, controls, computer vision, and practical engineering. I write Java/WPILib robot code, build ML experiments, teach teammates, test on real hardware, and connect software decisions to CAD, machining, and match strategy.",
  quickFacts: [
    "Head Programmer, FRC Team 1466",
    "Autonomous localization near 0.05 m / 0.1 rad",
    "Science Olympiad 1st Place, Competitive CAD",
    "Cisco Hack Camp Top Project Presenter",
  ],
  featuredWork: [
    {
      title: "FRC Autonomous Robot Software",
      context: "FRC Team 1466",
      subtitle: "Field-tested autonomous robot software for FRC Team 1466.",
      role: "Head Programmer / programming leadership",
      stack:
        "Java, WPILib, Choreo, AprilTags, command-based programming, pose estimation, drivetrain feedback",
      highlights: [
        "Led development of a Java/WPILib autonomous stack using Choreo trajectories, PIDF-controlled mechanisms, AprilTag-based 3D localization, pose estimation, and command-based sequencing.",
        "Maintained localization accuracy near 0.05 meters and 0.1 radians during robot operation by integrating vision, drivetrain odometry, and feedback.",
        "Built shared robot-state architecture for autonomous and teleoperated scoring, intake, and handoff routines.",
      ],
      outcome:
        "Supported field-tested autonomous and teleoperated robot behavior for FRC Team 1466 competition use.",
    },
    {
      title: "Harvard AI Bootcamp",
      context: "Summer 2025",
      subtitle: "Model-comparison project for image-based benign vs. malignant classification.",
      highlights: [
        "Built breast-cancer image classifiers in PyTorch using a curated benign vs. malignant dataset from the Kaggle Multi Cancer Dataset.",
        "Compared a custom CNN, ResNet18 transfer-learning model, and Vision Transformer while tuning learning rate, batch size, epochs, augmentation, and architecture choices.",
        "Reached up to 99.25% validation accuracy on the project validation split and visualized training and validation behavior to compare convergence and diagnose overfitting.",
      ],
      note: "Educational model-comparison project, not a clinical diagnostic system.",
    },
    {
      title: "Cisco Hack Camp",
      context: "Summer 2025",
      subtitle: "Solo ESP32-based bidirectional Morse code translator.",
      highlights: [
        "Built a solo ESP32-based bidirectional Morse code translator in C++.",
        "Implemented visual, keyboard, and tap input modes with real-time translation and WebSocket-based network communication.",
        "Selected by mentors and Cisco employees as the top project presenter and invited back as the only student mentor in the program's history.",
      ],
    },
    {
      title: "Artificial Intelligence Visual Assistant",
      context: "Independent project, Spring 2024",
      subtitle: "Local Python-based conversational avatar system with persistent memory.",
      stack: "Python, OpenAI Whisper, GPT-3.5 Turbo, OpenAI text-to-speech, NVIDIA Audio2Face",
      highlights: [
        "Built a local Python-based AI assistant with persistent user memory stored in structured JSON.",
        "Integrated speech-to-text, language-model responses, text-to-speech, and NVIDIA Audio2Face into a real-time conversational avatar pipeline.",
        "Deployed the system with multi-user support, tested it across about 20 users, and presented it to the K-12 school community.",
      ],
    },
  ],
  technicalFocus: [
    {
      title: "Autonomous Systems",
      items: [
        "Java/WPILib autonomous stack with Choreo, PIDF mechanisms, AprilTags, pose estimation, command sequencing, and shared robot-state architecture.",
      ],
    },
    {
      title: "AI and ML Experimentation",
      items: [
        "Hands-on model comparison, PyTorch image classifiers, CNN/ResNet18/Vision Transformer evaluation, training curves, validation behavior, and overfitting checks.",
      ],
    },
    {
      title: "Technical Leadership",
      items: [
        "Led a 6-student programming group, created 8 technical teaching decks, mentored teammates, and connected software decisions to hardware, CAD, and strategy.",
      ],
    },
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
      items: ["Java", "Python", "C++", "TypeScript", "React", "Git/GitHub"],
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
        "localization",
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
      title: "Head Programmer, FRC Team 1466",
      context: "2024–present",
      items: [
        "Own the Java/WPILib autonomous stack; full technical detail in Featured Work.",
        "Coordinate software with CAD, drive team, and match strategy across the season.",
      ],
    },
    {
      title: "Technical Leadership",
      context: "Robotics teaching and competition",
      items: [
        "Led a 6-student programming group through 8 technical slide decks covering robot software, controls, localization, and debugging.",
        "Co-led FTC Team 9934, a 15+ member team that won the 2024 Tennessee FTC State Championship.",
      ],
    },
    {
      title: "Engineering Breadth",
      context: "Code, CAD, CAM, and hardware",
      items: [
        "Designed robot mechanisms in Onshape, generated CAM in Fusion 360, and machined CNC parts for off-season projects.",
        "Qualified for the FRC World Championship and competed with teams from more than 35 countries.",
      ],
    },
  ],
  engineeringWorkflow: {
    summary:
      "I use documentation, source code, telemetry, hardware tests, and AI-assisted review tools to shorten debugging loops without outsourcing technical judgment. For robot code, I verify assumptions through logs, subsystem tests, and real hardware behavior.",
    items: [
      "Turn logs, symptoms, and telemetry into testable debugging hypotheses.",
      "Compare API behavior against documentation and source code before integrating.",
      "Use review tools to catch naming, type-safety, missing-case, and clarity issues.",
    ],
  },
  recognition: [
    {
      title: "Science Olympiad",
      items: [
        "1st place, Division C Competitive CAD.",
        "3rd place, Division C Windmill.",
      ],
    },
    {
      title: "TMTA Mathematics Competition",
      items: [
        "3rd place, Precalculus and Algebra II.",
      ],
    },
    {
      title: "FIRST Robotics",
      items: [
        "Contributed to an FRC program recognized with the 2025 FIRST Engineering Inspiration Award and 2026 Judges Award.",
        "Qualified for the FRC World Championship.",
      ],
    },
    {
      title: "STEM Mentorship and Outreach",
      items: [
        "Mentored FLL and FTC teams in programming fundamentals, systems thinking, and engineering iteration.",
        "Served as an Engineering Mentor at Camp Webb in 2024 and 2025, teaching Sumobots and Code Build Create programs for about 40 lower school students.",
      ],
    },
    {
      title: "America's Cutting Edge CNC Machining Training Program",
      items: [
        "Completed America's Cutting Edge CNC Machining Training Program covering foundational manufacturing concepts and machining workflow.",
      ],
    },
  ],
} satisfies ResumeProfile;
