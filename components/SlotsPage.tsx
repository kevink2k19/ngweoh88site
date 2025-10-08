import React from 'react';
import { Header } from './Header';
import { BottomNavigation } from './BottomNavigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { slotProviders, hotSlotGames } from '../data/slotsData.js';

interface SlotsPageProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function SlotsPage({ currentPage, onPageChange, isDarkMode, onThemeToggle }: SlotsPageProps) {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header 
        currentPage={currentPage} 
        onPageChange={onPageChange} 
        isDarkMode={isDarkMode} 
        onThemeToggle={onThemeToggle} 
      />
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Slot Games</h1>
        
        {/* All Collaborated Games */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium text-foreground">All Collaborated Games</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {slotProviders.map((provider) => (
              <div key={provider.key} className="bg-card rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                {/* Promo Icon */}
                {provider.hasPromo && (
                  <div className="absolute top-2 right-2 z-20">
                    <ImageWithFallback
                      src="https://img.bdimg.xyz/theme/images/src-common/PROMOTE-img/icon-promo.webp"
                      alt="Promo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                )}
                
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src={provider.featuredGame}
                    alt={`${provider.name} featured game`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{provider.name}</span>
                    <ImageWithFallback
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Games */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium text-foreground">Hot Games</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {slotProviders.slice(0, 6).map((provider) => (
              <div key={`hot-${provider.key}`} className="bg-card rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                {/* Hot Indicator */}
                <div className="absolute top-2 left-2 z-20">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse flex items-center gap-1">
                    🔥 HOT
                  </div>
                </div>
                
                {/* Promo Icon */}
                {provider.hasPromo && (
                  <div className="absolute top-2 right-2 z-20">
                    <ImageWithFallback
                      src="https://img.bdimg.xyz/theme/images/src-common/PROMOTE-img/icon-promo.webp"
                      alt="Promo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                )}
                
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src={provider.featuredGame}
                    alt={`${provider.name} featured game`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{provider.name}</span>
                    <ImageWithFallback
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Slots Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium text-foreground">Hot Slots</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {hotSlotGames.map((game) => (
              <div key={game.id} className="bg-card rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                {/* Jackpot Fire Indicator */}
                {game.isJackpotFire && (
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                      🔥 HOT
                    </div>
                  </div>
                )}
                
                {/* New Game Indicator */}
                {game.isNew && (
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      NEW
                    </div>
                  </div>
                )}

                {/* Jackpot Indicator */}
                {game.hasJackpot && !game.isJackpotFire && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      💰 JP
                    </div>
                  </div>
                )}

                {/* Bonus Indicator */}
                {game.hasBonus && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      🎁 BONUS
                    </div>
                  </div>
                )}

                <div className="aspect-square relative">
                  {/* Jackpot Amount Overlay for Fire Games */}
                  {game.isJackpotFire && game.jackpotAmount && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 flex flex-col justify-end p-3">
                      <div className="text-yellow-400 text-xs font-bold">TARGET: ${game.jackpotAmount}</div>
                      <div className="text-white text-xs">CURRENT: ${game.accumulatedAmount}</div>
                    </div>
                  )}
                  
                  <ImageWithFallback
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-muted-foreground">{game.name}</div>
                    <ImageWithFallback
                      src={game.providerLogo}
                      alt={`${game.provider} logo`}
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">RTP: {game.rtp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}