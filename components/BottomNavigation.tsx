import React from "react";
import {
  Home,
  Gamepad2,
  Wallet,
  Gift,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { getTranslation } from "../data/translations.js";

interface BottomNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language?: string;
}

export function BottomNavigation({
  currentPage,
  onPageChange,
  language = "en",
}: BottomNavigationProps) {
  const t = (key: string) => getTranslation(key, language);

  const navItems = [
    { key: "home", label: t("home"), icon: Home },
    { key: "games", label: t("gamesNav"), icon: Gamepad2 },
    { key: "deposit", label: t("deposit"), icon: Wallet },
    {
      key: "promotions",
      label: t("promotionsNav"),
      icon: Gift,
    },
    { key: "profile", label: t("profileNav"), icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="grid grid-cols-5 py-2 relative">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = currentPage === item.key;

          return (
            <motion.button
              key={item.key}
              onClick={() => {
                // Redirect to login page for deposit if not logged in
                if (item.key === "deposit") {
                  onPageChange("login");
                } else {
                  onPageChange(item.key);
                }
              }}
              className={`relative flex flex-col items-center gap-1 py-2 px-1 z-10 ${
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                },
              }}
              whileTap={{
                scale: 0.95,
                y: 1,
                transition: { duration: 0.1 },
              }}
              animate={{
                y: isActive ? -4 : 0,
                scale: isActive ? 1.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
              }}
            >
              {/* Animated Background for Active Tab */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-2xl shadow-lg -z-10"
                  layoutId="activeBottomTab"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}

              {/* Hover Background */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-muted/50 rounded-2xl -z-10 opacity-0"
                  whileHover={{
                    opacity: 1,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                />
              )}

              {/* Animated Icon */}
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  rotateY: isActive ? 360 : 0,
                }}
                transition={{
                  scale: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  },
                  rotateY: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                <IconComponent
                  className={`h-5 w-5 ${
                    isActive
                      ? "fill-primary-foreground/30 drop-shadow-sm"
                      : "hover:scale-110 transition-transform"
                  }`}
                />
              </motion.div>

              {/* Animated Label */}
              <motion.span
                className="text-xs font-medium"
                animate={{
                  scale: isActive ? 1.05 : 1,
                  fontWeight: isActive ? 600 : 500,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                {item.label}
              </motion.span>

              {/* Enhanced Active Indicator */}
              {isActive && (
                <motion.div
                  className="w-2 h-2 bg-primary-foreground rounded-full shadow-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.2, 1],
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    times: [0, 0.6, 1],
                    type: "tween",
                    ease: "easeOut",
                  }}
                />
              )}

              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={false}
                whileTap={{
                  background:
                    "radial-gradient(circle, rgba(139, 154, 92, 0.3) 0%, transparent 70%)",
                  transition: { duration: 0.3 },
                }}
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}