import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Play, Gift, Star, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

const promotionData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1688873157896-432c9a44eaae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBwcm9tb3Rpb24lMjBiYW5uZXIlMjBqYWNrcG90fGVufDF8fHx8MTc1OTMzMDIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "MEGA JACKPOT",
    amount: "500,000 MMK",
    description: "WIN BIG TODAY",
    buttonText: "PLAY NOW",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1561450031-0ae43a6ec2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBib251cyUyMHByb21vdGlvbiUyMGdvbGR8ZW58MXx8fHwxNzU5MzMwMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WELCOME BONUS",
    amount: "200% MATCH",
    description: "UP TO 100,000 MMK",
    buttonText: "CLAIM NOW",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1599579887642-9821ebe3c79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjB3ZWxjb21lJTIwYm9udXMlMjBsdXh1cnl8ZW58MXx8fHwxNzU5MzMwMjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "DAILY REWARDS",
    amount: "50,000 MMK",
    description: "EVERY DAY BONUS",
    buttonText: "GET BONUS",
  },
];

function PromotionCarousel({
  onPageChange,
}: {
  onPageChange: (page: string) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentPromo = promotionData[currentSlide];

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0">
        {/* Background Image with fade transition */}
        <div 
          key={`bg-${currentSlide}`}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${currentPromo.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div key={`content-${currentSlide}`} className="animate-fade-in">
              <div className="text-xs text-black/70 font-medium mb-1">
                {currentPromo.title}
              </div>
              <div className="text-2xl font-bold text-black mb-1">
                {currentPromo.amount}
              </div>
              <div className="text-xs text-black/70">
                {currentPromo.description}
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-xs text-white font-medium">24/7</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs text-black/70 mb-1">Fast Payout</div>
              <div className="text-sm font-bold text-black">15 Minutes</div>
            </div>
            <Button
              size="sm"
              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 border border-white/20"
              onClick={() => onPageChange("register")}
            >
              {currentPromo.buttonText}
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotionData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface HeroBannerProps {
  onPageChange: (page: string) => void;
  language: string;
}

export function HeroBanner({
  onPageChange,
  language,
}: HeroBannerProps) {
  return (
    <div className="px-4 py-6 space-y-6 max-w-7xl mx-auto">
      {/* Main Promotional Banner */}
      <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1689692784625-1ce82784a25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXIlMjBnYW1pbmclMjBuZW9ufGVufDF8fHx8MTc1Nzc0MzMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gaming background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/90" />

        <PromotionCarousel onPageChange={onPageChange} />
      </div>

      {/* Secondary Banners */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Free Spin Banner */}
        <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 to-orange-500/80" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div>
              <div className="text-xs text-black/70 font-medium">
                FREESPIN
              </div>
              <div className="text-xl font-bold text-black">
                ***
              </div>
            </div>
            <div className="text-xs text-black/70">
              FREE SPINS BONUS
            </div>
          </div>
        </div>

        {/* Cash Bonus Banner */}
        <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-emerald-500/80" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div>
              <div className="text-xs text-black/70 font-medium">
                BONUS
              </div>
              <div className="text-xl font-bold text-black">
                ****
              </div>
            </div>
            <div className="text-xs text-black/70">
              FREE CASH BONUS
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
    </div>
  );
}