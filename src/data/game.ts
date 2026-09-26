export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'Puzzle' | 'Educational' | 'Fun' | 'Language' | 'Arcade';
  icon: string; // Emoji icon for quick visual ID
  vercelUrl: string;
  color: string; // Tailwind color class for card header/accent
  tags: string[];
}

export const gamesData: Game[] = [
  {
    id: '1',
    title: 'Alphabet Builder',
    description: 'Help characters find their way while building letters and practicing phonics!',
    category: 'Educational',
    icon: '🧩',
    vercelUrl: 'https://find-its-way.vercel.app/',
    color: 'from-purple-500 to-indigo-600',
    tags: ['Letters', 'Alphabet', 'Phonics', 'Pathfinder'],
  },
  {
    id: '2',
    title: 'Alphabet Fun World!',
    description: 'Guess the hidden words and unlock magical alphabet challenges!',
    category: 'Educational',
    icon: '🔤',
    vercelUrl: 'https://guess-word-games.vercel.app/',
    color: 'from-blue-500 to-cyan-500',
    tags: ['Word Guess', 'Vocabulary', 'Spelling', 'Brain'],
  },
  {
    id: '3',
    title: 'Hindi Homework Helper',
    description: 'Interactive speaking and vocabulary guide to master Hindi lesson concepts!',
    category: 'Language',
    icon: '🗣️',
    vercelUrl: 'https://speak-hindi-chi.vercel.app/',
    color: 'from-orange-500 to-amber-500',
    tags: ['Hindi', 'Speaking', 'Homework', 'Language'],
  },
  {
  id: '4',
  title: '🐢 Tortoise Race Game',
  description: 'A skip-counting race! Choose your step size and help the tortoise reach the finish line with your math skills.',
  category: 'Fun',
  icon: '🐢',
  vercelUrl: 'https://tortoise-race.vercel.app/', // Replace with your actual Vercel link
  color: 'from-emerald-500 to-teal-500', // Green theme matches the tortoise & track theme
  tags: ['Math', 'Skip Counting', 'Numbers', 'Kids Game'],
},
  {
    id: '5',
    title: 'Snake Wiggle Game',
    description: 'Classic arcade snake fun! Slither around, collect treats, and grow longer.',
    category: 'Arcade',
    icon: '🐍',
    vercelUrl: 'https://snake-wiggle-game.vercel.app/',
    color: 'from-emerald-500 to-teal-600',
    tags: ['Retro', 'Arcade', 'Snake', 'High Score'],
  },
  {
    id: '6',
    title: 'NCERT Curiosity Lab',
    description: 'Explore interactive quizzes and fun science experiments from your NCERT topics!',
    category: 'Educational',
    icon: '🔬',
    vercelUrl: 'https://ncert-quiz-app.vercel.app/',
    color: 'from-rose-500 to-pink-600',
    tags: ['NCERT', 'Science', 'Quiz', 'School'],
  },
];