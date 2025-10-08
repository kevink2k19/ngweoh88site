'use client'

import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroBanner } from '../components/HeroBanner';
import { GameCategories } from '../components/GameCategories';
import { Promotions } from '../components/Promotions';
import { FeaturedGames } from '../components/FeaturedGames';
import { BottomNavigation } from '../components/BottomNavigation';
import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';
import { SlotsPage } from '../components/SlotsPage';
import { LiveCasinoPage } from '../components/LiveCasinoPage';
import { 
  VirtualSportsPage, 
  EsportsPage, 
  PokerPage, 
  GamesPage, 
  SportsPage, 
  PromotionsPage, 
  ProfilePage 
} from '../components/OtherPages';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  const [language, setLanguage] = useState('en'); // Default to English

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  // Apply dark class to document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Common props for all pages
  const pageProps = {
    currentPage: currentPage || 'home',
    onPageChange: handlePageChange,
    isDarkMode: isDarkMode || false,
    onThemeToggle: toggleTheme,
    language: language || 'en',
    onLanguageChange: handleLanguageChange
  };

  // Render specific pages
  switch (currentPage) {
    case 'login':
      return <LoginPage onPageChange={handlePageChange} language={language} />;
    
    case 'register':
      return <RegisterPage onPageChange={handlePageChange} language={language} />;
    
    case 'slots':
      return <SlotsPage {...pageProps} />;
    
    case 'live':
      return <LiveCasinoPage {...pageProps} />;
    
    case 'virtual':
      return <VirtualSportsPage {...pageProps} />;
    
    case 'esports':
      return <EsportsPage {...pageProps} />;
    
    case 'poker':
      return <PokerPage {...pageProps} />;
    
    case 'games':
      return <GamesPage {...pageProps} />;
    
    case 'sports':
      return <SportsPage {...pageProps} />;
    
    case 'promotions':
      return <PromotionsPage {...pageProps} />;
    
    case 'profile':
      return <ProfilePage {...pageProps} />;
    
    default:
      // Default home page
      return (
        <div className="min-h-screen bg-background pb-20">
          <Header 
            currentPage={currentPage} 
            onPageChange={handlePageChange} 
            isDarkMode={isDarkMode} 
            onThemeToggle={toggleTheme}
            language={language}
            onLanguageChange={handleLanguageChange}
          />
          <main>
            <HeroBanner onPageChange={handlePageChange} language={language} />
            <GameCategories language={language} />
            <FeaturedGames language={language} />
            <Promotions language={language} />
          </main>
          <BottomNavigation 
            currentPage={currentPage} 
            onPageChange={handlePageChange}
            language={language}
          />
        </div>
      );
  }
}