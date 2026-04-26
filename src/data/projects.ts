export interface Project {
  id:          string
  title:       string
  description: string
  stack:       string[]
  liveUrl?:    string
  githubUrl?:  string
  imageBg:     string // gradient or color for the image placeholder area
  details: {
    problem:       string
    solution:      string
    architecture:  string
    performance:   string
  }
}

export const projects: Project[] = [
  {
    id:          'project-linksentinel',
    title:       'LinkSentinel',
    description: 'A browser extension and desktop application designed to check link safety, helping users avoid phishing and malicious sites.',
    stack:       ['C#', '.NET', 'Browser Extension', 'Desktop App'],
    githubUrl:   'https://github.com/mustafaelshahhat-art/LinkSentinel',
    imageBg:     'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #0f2060 100%)',
    details: {
      problem:      'Users frequently encounter unsafe or malicious links but lack quick, reliable tools to verify them before clicking.',
      solution:     'Developed a multi-platform solution offering a browser extension for seamless web checking and a desktop app for broader link verification.',
      architecture: 'Client-server model with a core background service handling the security checks, communicating with the browser extension and desktop interface.',
      performance:  'Optimized network requests to ensure link verification happens quickly without disrupting the browsing experience.',
    },
  },
  {
    id:          'project-moonwatch',
    title:       'The Moon',
    description: 'An IPTV application featuring a rooms/watch-party system that allows users to synchronize video playback with friends.',
    stack:       ['Flutter', 'Dart', 'IPTV', 'Sockets'],
    githubUrl:   'https://github.com/mustafaelshahhat-art/MoonWatch',
    imageBg:     'linear-gradient(135deg, #001833 0%, #003366 50%, #00488a 100%)',
    details: {
      problem:      'Watching IPTV content together remotely is difficult due to varying stream delays and lack of synchronization features.',
      solution:     'Implemented a watch-party room system using real-time communication to keep playback states synchronized among participants.',
      architecture: 'Mobile client built with Flutter connecting to a real-time backend to handle room state, user presence, and media playback control.',
      performance:  'Designed efficient socket event handling to minimize latency and keep stream playback smooth and synchronized.',
    },
  },
  {
    id:          'project-soulmate',
    title:       'Soulmate Store',
    description: 'An e-commerce website dedicated to selling accessories, featuring product browsing, cart functionality, and a clean user interface.',
    stack:       ['React', 'TypeScript', '.NET', 'Tailwind CSS'],
    githubUrl:   'https://github.com/mustafaelshahhat-art/Soulmate-Accessories-Store',
    imageBg:     'linear-gradient(135deg, #4a0018 0%, #800020 50%, #b3003b 100%)',
    details: {
      problem:      'Creating an engaging and straightforward online shopping experience for accessories.',
      solution:     'Built a responsive front-end storefront with a dedicated backend to manage products, categories, and shopping cart sessions.',
      architecture: 'React frontend communicating with a RESTful .NET backend API, with state management for cart and user sessions.',
      performance:  'Optimized image loading and implemented responsive design principles to ensure fast load times on mobile devices.',
    },
  },
  {
    id:          'project-elibrary',
    title:       'E-Library',
    description: 'An electronic library website enabling users to browse, search, and access digital reading resources seamlessly.',
    stack:       ['Web Development', 'Database', 'UI/UX'],
    githubUrl:   'https://github.com/mustafaelshahhat-art/E-Library-WebApp',
    imageBg:     'linear-gradient(135deg, #0a2e15 0%, #1a4d2e 50%, #2b7a4b 100%)',
    details: {
      problem:      'Users needed a centralized, digital platform to access reading materials and library resources efficiently.',
      solution:     'Developed a web-based catalog with robust search and filtering capabilities to help users easily locate materials.',
      architecture: 'Standard web architecture with a relational database to manage books, authors, and user borrowing records.',
      performance:  'Implemented efficient database indexing for fast search queries across the library catalog.',
    },
  },
  {
    id:          'project-numerical',
    title:       'Numerical Methods Solver',
    description: 'A pure C++ desktop application built with Qt Widgets for solving complex numerical methods and equations.',
    stack:       ['C++', 'Qt Widgets', 'CMake'],
    githubUrl:   'https://github.com/mustafaelshahhat-art/Numerical-Methods-Solver',
    imageBg:     'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
    details: {
      problem:      'Evaluating complex numerical algorithms by hand is error-prone and time-consuming for engineers and developers.',
      solution:     'Created a desktop solver with a graphical user interface to input equations and instantly compute results using various numerical methods.',
      architecture: 'C++ core logic separated from the Qt GUI layer, using CMake for cross-platform build configuration.',
      performance:  'Leveraged C++ performance to execute heavy mathematical computations instantly, providing immediate feedback in the UI.',
    },
  },
  {
    id:          'project-korazone',
    title:       'Kora Zone 365',
    description: 'A dedicated platform for organizing football tournaments and Ramadan leagues, featuring match schedules and team standings.',
    stack:       ['React', 'TypeScript', 'Tailwind', '.NET'],
    githubUrl:   'https://github.com/mustafaelshahhat-art/KoraZone365',
    imageBg:     'linear-gradient(135deg, #3d1b04 0%, #7a3608 50%, #bd530d 100%)',
    details: {
      problem:      'Local football tournament organizers needed a digital way to manage brackets, schedules, and league tables.',
      solution:     'Built a web application to track tournament progress, display upcoming matches, and calculate points for participating teams.',
      architecture: 'Full-stack application with a dashboard for organizers and a public view for fans and players to track results.',
      performance:  'Optimized API responses and frontend rendering to handle traffic spikes during live match updates.',
    },
  },
]
