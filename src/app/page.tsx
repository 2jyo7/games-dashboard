'use client';

import { useState } from 'react';

import { Play, ExternalLink, Gamepad2, Search, Sparkles } from 'lucide-react';
import { Game, gamesData } from '@/data/game';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Arcade', 'Puzzle', 'Action', 'Educational', 'Fun'];

  const filteredGames = gamesData.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || game.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans pb-12">
      {/* Header Banner */}
      <header className="bg-linear-to-r from-violet-600 via-indigo-600 to-blue-600 py-10 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Gamepad2 className="w-10 h-10 text-yellow-300 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              Kids Game World
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <p className="text-indigo-100 text-lg md:text-xl font-medium">
            Pick a game and start playing instantly!
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 mt-8">
        {/* Controls: Search and Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-white pl-10 pr-4 py-2.5 rounded-full border border-slate-700 focus:outline-none focus:border-indigo-500 placeholder-slate-400"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Game Cards Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game: Game) => (
              <div
                key={game.id}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Card Banner */}
                  <div
                    className={`bg-linear-to-r ${game.color} p-6 text-center text-5xl relative`}
                  >
                    <span>{game.icon}</span>
                    <span className="absolute top-3 right-3 bg-black/30 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
                      {game.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-2 text-white">
                      {game.title}
                    </h2>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {game.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {game.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-700/60 text-slate-300 text-xs px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Launch Button */}
                <div className="px-5 pb-5">
                  <a
                    href={game.vercelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    <Play className="w-5 h-5 fill-slate-950" />
                    Play Game
                    <ExternalLink className="w-4 h-4 opacity-75" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg">No games found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}