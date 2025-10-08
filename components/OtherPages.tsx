import React from 'react';
import { Header } from './Header';
import { BottomNavigation } from './BottomNavigation';
import { Promotions } from './Promotions';

interface PageProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  language: string;
  onLanguageChange: (language: string) => void;
}

export function VirtualSportsPage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  const virtualSports = [
    'Virtual Football', 'Virtual Racing', 'Virtual Tennis', 
    'Virtual Basketball', 'Virtual Greyhounds', 'Virtual Cricket'
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Virtual Sports</h1>
        
        <div className="grid grid-cols-2 gap-4">
          {virtualSports.map((sport, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border border-border/50">
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-3xl">⚽</span>
              </div>
              <div className="p-3">
                <div className="font-medium text-sm mb-1">{sport}</div>
                <div className="text-xs text-muted-foreground">24/7 Available</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}

export function EsportsPage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  const esportsMatches = [
    { game: 'League of Legends', team1: 'T1', team2: 'DRX', time: '15:30' },
    { game: 'CS:GO', team1: 'FaZe', team2: 'NAVI', time: '18:00' },
    { game: 'Dota 2', team1: 'OG', team2: 'Secret', time: '20:30' },
    { game: 'Valorant', team1: 'Sentinels', team2: 'Fnatic', time: '22:00' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">E-Sports</h1>
        
        <div className="space-y-4">
          {esportsMatches.map((match, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium text-sm">{match.team1} vs {match.team2}</div>
                  <div className="text-xs text-muted-foreground">{match.game} • {match.time}</div>
                </div>
                <div className="text-blue-500 text-xs font-medium">LIVE</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded text-sm font-medium transition-colors">
                  {match.team1}
                </button>
                <button className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded text-sm font-medium transition-colors">
                  {match.team2}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}

export function PokerPage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  const pokerTables = [
    { name: 'Texas Hold\'em', stakes: '$1/$2', players: '6/9' },
    { name: 'Omaha', stakes: '$2/$5', players: '4/6' },
    { name: 'Seven Card Stud', stakes: '$5/$10', players: '7/8' },
    { name: 'Tournament #1', stakes: '$10 Buy-in', players: '45/100' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Poker</h1>
        
        <div className="space-y-4">
          {pokerTables.map((table, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium text-sm">{table.name}</div>
                  <div className="text-xs text-muted-foreground">{table.stakes}</div>
                </div>
                <div className="text-green-500 text-xs font-medium">{table.players}</div>
              </div>
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded text-sm font-medium transition-colors">
                Join Table
              </button>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}

export function GamesPage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  const gameCategories = ['Slots', 'Live Casino', 'Table Games', 'Jackpot', 'New Games', 'Popular'];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">All Games</h1>
        
        {/* Game Categories */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {gameCategories.map((category) => (
            <div key={category} className="bg-card p-4 rounded-lg border border-border/50 text-center">
              <div className="h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-2xl">🎰</span>
              </div>
              <div className="font-medium text-sm">{category}</div>
            </div>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden border border-border/50">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-3xl">🎮</span>
              </div>
              <div className="p-3">
                <div className="font-medium text-sm mb-1">Game {i + 1}</div>
                <div className="text-xs text-muted-foreground">Provider</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}

export function SportsPage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  const sportsMatches = [
    { team1: 'Manchester City', team2: 'Liverpool', time: '15:30', odds: ['2.15', '3.40', '2.85'] },
    { team1: 'Real Madrid', team2: 'Barcelona', time: '18:00', odds: ['1.85', '3.60', '3.20'] },
    { team1: 'Bayern Munich', team2: 'Dortmund', time: '20:30', odds: ['1.95', '3.50', '3.10'] }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Sports Betting</h1>
        
        <div className="space-y-4">
          {sportsMatches.map((match, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium text-sm">{match.team1} vs {match.team2}</div>
                  <div className="text-xs text-muted-foreground">{match.time}</div>
                </div>
                <div className="text-red-500 text-xs font-medium">LIVE</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {match.odds.map((odd, i) => (
                  <button key={i} className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded text-sm font-medium transition-colors">
                    {odd}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}

export function PromotionsPage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Bonuses & Promotions</h1>
        <Promotions language={language} />
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}

export function ProfilePage({ currentPage, onPageChange, isDarkMode, onThemeToggle, language = 'en', onLanguageChange }: PageProps) {
  const profileItems = ['Account Info', 'Deposit', 'Withdraw', 'Bet History', 'My Bonuses', 'Support'];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header currentPage={currentPage} onPageChange={onPageChange} isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} language={language} onLanguageChange={onLanguageChange} />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Profile</h1>
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-4 border border-border/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <div className="font-medium mb-1">User</div>
            <div className="text-sm text-muted-foreground">user@example.com</div>
          </div>
          
          {profileItems.map((item) => (
            <button key={item} className="w-full bg-card rounded-lg p-4 border border-border/50 text-left hover:bg-muted/50 transition-colors">
              <div className="font-medium text-sm">{item}</div>
            </button>
          ))}
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} language={language} />
    </div>
  );
}