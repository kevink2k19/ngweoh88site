import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import {
  User,
  Languages,
  Sun,
  Moon,
  ChevronDown,
  Crown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getTranslation } from "../data/translations.js";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  language?: "en" | "my" | string;
  onLanguageChange?: (language: "en" | "my") => void;
}

export function Header({
  currentPage,
  onPageChange,
  isDarkMode = true,
  onThemeToggle,
  language = "en",
  onLanguageChange,
}: HeaderProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] =
    useState(false);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  const t = (key: string) => getTranslation(key, language);

  // Compute dropdown position in viewport coords (for position: fixed)
  useEffect(() => {
    if (isLanguageDropdownOpen && languageButtonRef.current) {
      const rect =
        languageButtonRef.current.getBoundingClientRect();
      const dropdownWidth = 128; // w-32
      const gap = 8; // mt-2
      setMenuPos({
        top: rect.bottom + gap,
        left: rect.right - dropdownWidth,
      });
    }
  }, [isLanguageDropdownOpen]);

  // Close on outside click or Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isLanguageDropdownOpen) return;
      const btn = languageButtonRef.current;
      if (
        btn &&
        e.target instanceof Node &&
        btn.contains(e.target)
      )
        return;
      setIsLanguageDropdownOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLanguageDropdownOpen(false);
    };
    if (isLanguageDropdownOpen) {
      document.addEventListener("click", onDocClick);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isLanguageDropdownOpen]);

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 isolate">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onPageChange("home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <Crown className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <motion.span
                className="text-lg font-bold text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                NgweOh88
              </motion.span>
            </motion.div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 relative z-40">
            {/* Language Selector (NO transform on wrapper) */}
            <div className="relative">
              <Button
                ref={languageButtonRef}
                variant="ghost"
                size="sm"
                onClick={() =>
                  setIsLanguageDropdownOpen((s) => !s)
                }
                className="text-muted-foreground hover:text-primary flex items-center gap-1 relative z-50"
                aria-haspopup="menu"
                aria-expanded={isLanguageDropdownOpen}
              >
                <Languages className="h-4 w-4" />
                <span className="text-xs font-medium">
                  {language === "en"
                    ? "EN"
                    : language === "my"
                      ? "မြန်"
                      : "??"}
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>

              {/* Portal-like: fixed dropdown to avoid stacking issues */}
              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="fixed w-32 bg-card border border-border rounded-lg shadow-lg z-[9999] overflow-hidden"
                    style={{
                      top: menuPos.top,
                      left: menuPos.left,
                    }}
                    role="menu"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLanguageChange?.("en");
                        setIsLanguageDropdownOpen(false);
                      }}
                      role="menuitem"
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-muted/50 transition-colors flex items-center gap-2 ${
                        language === "en"
                          ? "bg-primary/10 text-primary"
                          : "text-foreground"
                      }`}
                    >
                      🇺🇸 {t("english")}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLanguageChange?.("my");
                        setIsLanguageDropdownOpen(false);
                      }}
                      role="menuitem"
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-muted/50 transition-colors flex items-center gap-2 ${
                        language === "my"
                          ? "bg-primary/10 text-primary"
                          : "text-foreground"
                      }`}
                    >
                      🇲🇲 {t("burmese")}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            {onThemeToggle && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onThemeToggle}
                  className="text-muted-foreground hover:text-primary relative overflow-hidden"
                  title={
                    isDarkMode
                      ? "Switch to Light Theme"
                      : "Switch to Dark Theme"
                  }
                >
                  <motion.div
                    key={isDarkMode ? "sun" : "moon"}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isDarkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            )}

            {/* Login */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="sm"
                onClick={() => onPageChange("login")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden"
              >
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <User className="h-4 w-4 mr-1" />
                  {t("login")}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="relative mt-3 overflow-x-auto z-10">
          <div className="flex items-center gap-1 relative">
            {[
              { key: "home", label: t("home") },
              { key: "slots", label: t("slots") },
              { key: "live", label: t("live") },
              { key: "sports", label: t("sports") },
              { key: "virtual", label: t("virtual") },
              { key: "esports", label: t("esports") },
              { key: "poker", label: t("poker") },
            ].map((item) => (
              <motion.button
                key={item.key}
                onClick={() => onPageChange(item.key)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 z-10 ${
                  currentPage === item.key
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  y: currentPage === item.key ? -2 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {item.label}

                {/* Active indicator */}
                {currentPage === item.key && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-lg -z-10"
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover effect */}
                {currentPage !== item.key && (
                  <motion.div
                    className="absolute inset-0 bg-muted/50 rounded-lg -z-10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-accent z-0"
            animate={{
              x:
                currentPage === "home"
                  ? 0
                  : currentPage === "slots"
                    ? 60
                    : currentPage === "live"
                      ? 120
                      : currentPage === "sports"
                        ? 180
                        : currentPage === "virtual"
                          ? 240
                          : currentPage === "esports"
                            ? 300
                            : currentPage === "poker"
                              ? 360
                              : 0,
              width:
                currentPage === "home"
                  ? 48
                  : currentPage === "slots"
                    ? 52
                    : currentPage === "live"
                      ? 40
                      : currentPage === "sports"
                        ? 56
                        : currentPage === "virtual"
                          ? 64
                          : currentPage === "esports"
                            ? 68
                            : currentPage === "poker"
                              ? 48
                              : 48,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />
        </div>
      </div>
    </header>
  );
}