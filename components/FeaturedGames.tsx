import React from 'react';
import { Card } from './ui/card';
import { Play, Star, Flame, Crown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const featuredGames = [
  {
    id: 1,
    title: 'Fortune Gems',
    provider: 'JILI',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/JILI/FortuneGems.webp',
    isHot: true,
    isNew: false,
    jackpot: '$695,700',
    targetAmount: '695,700.00',
    currentAmount: '434,902.47',
    badge: 'JACKPOT',
    hasJackpotFire: true
  },
  {
    id: 2,
    title: 'Gates of Olympus Super Scatter',
    provider: 'Pragmatic Play',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/PP/GatesofOlympusSuperScatter.webp',
    isHot: false,
    isNew: false,
    jackpot: '$12,450',
    badge: 'HOT'
  },
  {
    id: 3,
    title: 'Super Ace',
    provider: 'JILI',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/JILI/SuperAce.webp',
    isHot: true,
    isNew: false,
    jackpot: '$28,750',
    badge: 'JACKPOT'
  },
  {
    id: 4,
    title: 'Gates of Olympus 1000',
    provider: 'Pragmatic Play',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/PP/GatesofOlympus1000.webp',
    isHot: false,
    isNew: false,
    jackpot: '$15,280',
    badge: 'HOT'
  },
  {
    id: 5,
    title: 'Fortune Coins 2',
    provider: 'JILI',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/JILI/FortuneCoins2.webp',
    isHot: false,
    isNew: true,
    jackpot: '$8,125',
    badge: 'NEW'
  },
  {
    id: 6,
    title: 'Starlight Princess 1000',
    provider: 'Pragmatic Play',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/PP/StarlightPrincess1000.webp',
    isHot: true,
    isNew: false,
    jackpot: '$22,340',
    badge: 'HOT'
  },
  {
    id: 7,
    title: 'Golden Empire',
    provider: 'JILI',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/JILI/GoldenEmpire.webp',
    isHot: false,
    isNew: false,
    jackpot: '$18,920',
    badge: 'JACKPOT'
  },
  {
    id: 8,
    title: 'Fortune Gems 2',
    provider: 'JILI',
    image: 'https://img.bdimg.xyz/theme/images/gameIcon/JILI/FortuneGems2.webp',
    isHot: true,
    isNew: false,
    jackpot: '$417,400',
    targetAmount: '417,400.00',
    currentAmount: '272,353.60',
    badge: 'JACKPOT',
    hasJackpotFire: true
  }
];

interface FeaturedGamesProps {
  language: string;
}

export function FeaturedGames({ language }: FeaturedGamesProps) {
  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">POPULAR GAMES</h2>
        <button className="text-primary text-sm font-medium">All</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {featuredGames.map((game) => (
          <Card key={game.id} className="group hover:scale-105 transition-transform duration-200 border-border/50 bg-card overflow-hidden">
            <div className="relative aspect-square">
              <ImageWithFallback
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Jackpot Fire Display for special games */}
              {game.hasJackpotFire && (
                <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] leading-none">TARGET</span>
                    <span className="text-xs font-bold">${game.targetAmount}</span>
                    <span className="text-[10px] leading-none">CURRENT</span>
                    <span className="text-xs font-bold">${game.currentAmount}</span>
                  </div>
                </div>
              )}
              
              {/* Badge */}
              <div className="absolute top-2 left-2">
                {game.badge === 'HOT' && (
                  <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    <Flame className="h-3 w-3" />
                    HOT
                  </div>
                )}
                {game.badge === 'NEW' && (
                  <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                    <Star className="h-3 w-3" />
                    NEW
                  </div>
                )}
                {game.badge === 'JACKPOT' && (
                  <div className="flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    <Crown className="h-3 w-3" />
                    JACKPOT
                  </div>
                )}
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 border border-white/20">
                  <Play className="h-6 w-6 text-white fill-white" />
                </div>
              </div>

              {/* Game Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-semibold text-white text-sm mb-1">{game.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-white/70 text-xs">{game.provider}</p>
                  <div className="text-yellow-400 text-xs font-bold">{game.jackpot}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Live Games Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">LIVE CASINO</h3>
          <button className="text-primary text-sm font-medium">All</button>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'Lightning Roulette', dealer: 'Sarah', players: '247', status: 'LIVE' },
            { name: 'Blackjack Party', dealer: 'Mike', players: '189', status: 'LIVE' },
            { name: 'Baccarat Squeeze', dealer: 'Elena', players: '156', status: 'LIVE' }
          ].map((game, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{game.name}</h4>
                    <p className="text-muted-foreground text-xs">Dealer: {game.dealer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-500 text-xs font-bold">{game.status}</span>
                  </div>
                  <div className="text-muted-foreground text-xs">{game.players} players</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}