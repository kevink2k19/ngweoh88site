import React from 'react';
import { Header } from './Header';
import { BottomNavigation } from './BottomNavigation';

interface LiveCasinoPageProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function LiveCasinoPage({ currentPage, onPageChange, isDarkMode, onThemeToggle }: LiveCasinoPageProps) {
  const liveGames = [
    'Live Blackjack', 'Live Roulette', 'Live Baccarat', 
    'Live Poker', 'Dream Catcher', 'Monopoly Live'
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header 
        currentPage={currentPage} 
        onPageChange={onPageChange} 
        isDarkMode={isDarkMode} 
        onThemeToggle={onThemeToggle} 
      />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Live Casino</h1>
        
        {/* Live Games */}
        <div className="grid grid-cols-2 gap-4">
          {liveGames.map((game, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border border-border/50">
              <div className="aspect-square bg-gradient-to-br from-red-500/20 to-yellow-500/20 flex items-center justify-center relative">
                <span className="text-3xl">🎯</span>
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</div>
              </div>
              <div className="p-3">
                <div className="font-medium text-sm mb-1">{game}</div>
                <div className="text-xs text-muted-foreground">Evolution Gaming</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}