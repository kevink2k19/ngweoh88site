# NgweOh88 Casino 🎰

A luxury casino website with beige and olive color theme, featuring mobile-first responsive design and professional casino aesthetics.

## 🚀 Features

- 🎮 **Multi-Game Platform**: Slots, Live Casino, Sports Betting, Fishing, Arcade, Table Games
- 🌍 **Multi-Language**: English and Burmese support with country flags
- 🌙 **Theme Toggle**: Light/Dark mode with refined color schemes
- 📱 **Mobile-First**: Responsive design optimized for all devices
- 🎨 **Luxury Design**: Professional casino aesthetics with smooth animations
- 🔐 **Authentication**: Complete login/register system
- 💰 **Payment Integration**: OneWallet payment gateway support
- 📊 **Supabase Backend**: Real-time database and authentication

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Next.js 14
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **UI Components**: shadcn/ui component library
- **Animation**: Motion/React (formerly Framer Motion)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **Payment**: OneWallet integration

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🏗️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ngweoh88-casino.git
cd ngweoh88-casino
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

Required environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ONEWALLET_API_KEY=your_onewallet_api_key
ONEWALLET_WEBHOOK_SECRET=your_onewallet_webhook_secret
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
ngweoh88-casino/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── figma/           # Figma-specific components
│   ├── Header.tsx       # Main navigation
│   ├── HeroBanner.tsx   # Homepage hero section
│   ├── GameCategories.tsx # Game category grid
│   └── ...              # Other components
├── data/                # Static data files
│   ├── slotsData.js     # Slot games data
│   └── translations.js  # Language translations
├── lib/                 # Utility functions
│   ├── supabase.ts      # Supabase client & functions
│   └── utils.ts         # General utilities
├── styles/              # CSS styles
│   └── globals.css      # Global Tailwind styles
├── App.tsx              # Main application component
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Design System

### Color Palette
```css
/* Light Mode */
--background: #f5f1e8    /* Warm beige */
--primary: #6b7c3b       /* Olive green */
--accent: #8c9a5c        /* Light olive */
--foreground: #3a5224    /* Dark green */

/* Dark Mode */
--background: #0f0d0a    /* Dark brown */
--primary: #8c9a5c       /* Light olive */
--accent: #6b7c3b        /* Olive green */
--foreground: #f5f3f0    /* Light beige */
```

### Typography
- **Font Family**: Inter (system fallback)
- **Base Size**: 16px
- **Weights**: 400 (normal), 500 (medium)
- **Line Height**: 1.5

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT,
  phone TEXT,
  wallet_balance DECIMAL(12,2) DEFAULT 0,
  currency TEXT DEFAULT 'MMK',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount DECIMAL(12,2) NOT NULL,
  currency TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  onewallet_transaction_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Full static hosting support
- **AWS Amplify**: Serverless deployment
- **DigitalOcean**: App Platform deployment

## 🔐 Security Features

- **Environment Variables**: Secure API key management
- **Authentication**: Supabase Auth with Row Level Security
- **Input Validation**: Form validation and sanitization
- **HTTPS**: SSL/TLS encryption
- **CORS**: Cross-origin request protection

## 🌍 Internationalization

Currently supports:
- **English** (en)
- **Burmese** (my)

Language switching with country flags and comprehensive translations for all UI elements.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: xs(475px), sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
- **Touch Friendly**: Large tap targets and smooth gestures

## 🎮 Game Categories

1. **Live Casino** - Real dealers, live streaming
2. **Slot Games** - 500+ slot machines from top providers
3. **Sports Betting** - Live sports and virtual sports
4. **Fishing Games** - Popular arcade-style fishing
5. **Arcade Games** - Classic and modern arcade games
6. **Table Games** - Blackjack, Roulette, Baccarat, Poker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: support@ngweoh88.com
- **Discord**: [Join our community](https://discord.gg/ngweoh88)
- **Documentation**: [docs.ngweoh88.com](https://docs.ngweoh88.com)

## 🏆 Acknowledgments

- **Design**: Figma Make platform
- **UI Components**: shadcn/ui library
- **Icons**: Lucide React
- **Payment**: OneWallet integration
- **Backend**: Supabase platform

---

**NgweOh88 Casino** - Where luxury meets technology 🎰✨