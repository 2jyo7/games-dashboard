export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'Puzzle' | 'Educational' | 'Fun';
  icon: string; // Emoji icon for quick visual ID
  vercelUrl: string;
  color: string; // Tailwind color class for card header/accent
  tags: string[];
}

export const gamesData: Game[] = [
  {
    id: '1',
    title: 'Alphabet Builder',
    description: '',
    category: 'Arcade',
    icon: '🚀',
    vercelUrl: 'https://find-its-way.vercel.app/', // Replace with your Vercel URL
    color: 'from-purple-500 to-indigo-600',
    tags: ['Space', 'Flying', 'High Score'],
  },
  {
    id: '2',
    title: 'Math Quiz Quest',
    description: 'Solve fun math puzzles and level up your math superpowers!',
    category: 'Educational',
    icon: '🧠',
    vercelUrl: 'https://your-math-game.vercel.app', // Replace with your Vercel URL
    color: 'from-blue-500 to-cyan-500',
    tags: ['Math', 'Brain', 'Learning'],
  },
  {
    id: '3',
    title: 'Color Matcher',
    description: 'Test your reaction speed by matching colors before time runs out!',
    category: 'Puzzle',
    icon: '🎨',
    vercelUrl: 'https://your-color-game.vercel.app', // Replace with your Vercel URL
    color: 'from-pink-500 to-rose-500',
    tags: ['Colors', 'Speed', 'Puzzle'],
  },
  {
    id: '4',
    title: 'Dino Runner',
    description: 'Jump over obstacles and run as far as you can in this classic arcade game!',
    category: 'Action',
    icon: '🦖',
    vercelUrl: 'https://your-dino-game.vercel.app', // Replace with your Vercel URL
    color: 'from-emerald-500 to-teal-600',
    tags: ['Retro', 'Jumping', 'Runner'],
  },
];