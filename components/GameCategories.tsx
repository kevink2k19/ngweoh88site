import React from "react";
import { Card } from "./ui/card";
import {
  Gamepad2,
  Dice1,
  Crown,
  Users,
  Target,
  Fish,
  Zap,
  Trophy,
} from "lucide-react";

const gameCategories = [
  {
    id: 1,
    title: "Live Casino",
    description: "Live Dealers",
    icon: Crown,
    isImage: false,
    gradient: "from-red-500 to-pink-500",
    count: "24",
  },
  {
    id: 2,
    title: "Slot Games",
    description: "Premium Slots",
    icon: Gamepad2,
    isImage: false,
    gradient: "from-blue-500 to-cyan-500",
    count: "500+",
  },
  {
    id: 3,
    title: "Sports Betting",
    description: "Live Betting",
    icon: Trophy,
    isImage: false,
    gradient: "from-green-500 to-emerald-500",
    count: "Live",
  },
  {
    id: 4,
    title: "Fishing",
    description: "Fishing Games",
    icon: Fish,
    isImage: false,
    gradient: "from-cyan-500 to-blue-500",
    count: "Hot",
  },
  {
    id: 5,
    title: "Arcade",
    description: "Retro Games",
    icon: Zap,
    isImage: false,
    gradient: "from-purple-500 to-violet-500",
    count: "New",
  },
  {
    id: 6,
    title: "Table Games",
    description: "Classic Casino",
    icon: Dice1,
    isImage: false,
    gradient: "from-orange-500 to-red-500",
    count: "VIP",
  },
  {
    id: 7,
    title: "Tournaments",
    description: "Competitions",
    icon: Users,
    isImage: false,
    gradient: "from-teal-500 to-cyan-500",
    count: "New",
  },
  {
    id: 8,
    title: "Virtual",
    description: "Virtual Sports",
    icon: Target,
    isImage: false,
    gradient: "from-indigo-500 to-blue-500",
    count: "24/7",
  },
];

interface GameCategoriesProps {
  language: string;
}

export function GameCategories({
  language,
}: GameCategoriesProps) {
  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">
          SPIN CODE FOR EVERY DEPOSIT
        </h2>
        <button className="text-primary text-sm font-medium">
          All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {gameCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card
              key={category.id}
              className="group cursor-pointer hover:scale-105 transition-transform duration-200 border-border/50 bg-card"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                    {category.count}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {category.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Payment Methods */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-foreground mb-4">
          UPCOMING MATCHES
        </h3>
        <div className="space-y-3">
          {[
            {
              team1: "Manchester City",
              team2: "Liverpool",
              time: "15:30",
              odds: "2.15",
            },
            {
              team1: "Real Madrid",
              team2: "Barcelona",
              time: "18:00",
              odds: "1.85",
            },
            {
              team1: "Bayern Munich",
              team2: "Dortmund",
              time: "20:30",
              odds: "1.95",
            },
          ].map((match, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-3 border border-border/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">
                    {match.team1} vs {match.team2}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {match.time}
                  </div>
                </div>
                <div className="text-primary font-bold text-sm">
                  {match.odds}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}