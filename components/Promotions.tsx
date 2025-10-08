import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Gift,
  Clock,
  Star,
  Trophy,
  Zap,
  Crown,
} from "lucide-react";

const promotions = [
  {
    id: 1,
    title: "Welcome Bonus",
    description: "100% Deposit Bonus + 50 Freespins",
    icon: Gift,
    value: "5,000",
    gradient: "from-yellow-500 to-orange-500",
    button: "JOIN",
  },
  {
    id: 2,
    title: "Daily Cashback",
    description: "10% loss refund every day",
    icon: Clock,
    value: "10%",
    gradient: "from-green-500 to-emerald-500",
    button: "CLAIM",
  },
  {
    id: 3,
    title: "VIP Program",
    description: "Special rewards and personal account manager",
    icon: Crown,
    value: "VIP",
    gradient: "from-purple-500 to-violet-500",
    button: "JOIN",
  },
  {
    id: 4,
    title: "Weekly Tournament",
    description: "5,000,000 prize pool",
    icon: Trophy,
    value: "500K",
    gradient: "from-blue-500 to-cyan-500",
    button: "PLAY",
  },
];

interface PromotionsProps {
  language: string;
}

export function Promotions({ language }: PromotionsProps) {
  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">
          PROMOTIONS
        </h2>
        <button className="text-primary text-sm font-medium">
          All
        </button>
      </div>

      <div className="space-y-4">
        {promotions.map((promo) => {
          const IconComponent = promo.icon;
          return (
            <Card
              key={promo.id}
              className="border-border/50 bg-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className={`relative h-24 bg-gradient-to-r ${promo.gradient} p-4 flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-sm">
                        {promo.title}
                      </h3>
                      <p className="text-black/70 text-xs">
                        {promo.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-black mb-1">
                      {promo.value}
                    </div>
                    <Button
                      size="sm"
                      className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 border border-white/20 text-xs"
                    >
                      {promo.button}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border/50 text-center">
          <div className="text-primary text-xl font-bold mb-1">
            200,000,000
          </div>
          <div className="text-muted-foreground text-xs">
            Daily Jackpot
          </div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border/50 text-center">
          <div className="text-primary text-2xl font-bold mb-1">
            24/7
          </div>
          <div className="text-muted-foreground text-xs">
            Live Support
          </div>
        </div>
      </div>
    </section>
  );
}