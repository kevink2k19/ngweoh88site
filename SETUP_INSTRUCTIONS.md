# 🎰 NgweOh88 Casino - Mac Setup Instructions

## 📋 Prerequisites (Install First)

### 1. Install Homebrew (if not already installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install Node.js
```bash
brew install node
```

### 3. Verify Installation
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 8.0.0 or higher
```

## 🚀 Quick Setup (Automated)

### Option 1: Run Setup Script
```bash
chmod +x setup.sh
./setup.sh
```

## 🛠️ Manual Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit with your values (use nano, vim, or any text editor)
nano .env.local
```

**Required Variables:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
ONEWALLET_API_KEY=your_onewallet_api_key_here
ONEWALLET_WEBHOOK_SECRET=your_onewallet_webhook_secret_here
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:3000
```

## 🔧 Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linting
npm run type-check   # TypeScript checking
```

## 📱 Testing on Mobile (Same Network)

1. Find your Mac's IP address:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

2. Access from mobile device:
```
http://YOUR_IP_ADDRESS:3000
```

## 🗄️ Database Setup (Supabase)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get your project URL and anon key

### 2. Run Database Migrations
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  username TEXT,
  phone TEXT,
  wallet_balance DECIMAL(12,2) DEFAULT 0,
  currency TEXT DEFAULT 'MMK',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  amount DECIMAL(12,2) NOT NULL,
  currency TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'bet', 'win')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  description TEXT,
  onewallet_transaction_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Games table
CREATE TABLE games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  provider TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  min_bet DECIMAL(10,2) DEFAULT 1,
  max_bet DECIMAL(10,2) DEFAULT 10000,
  rtp DECIMAL(5,2) DEFAULT 96.50,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Promotions table
CREATE TABLE promotions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  bonus_type TEXT NOT NULL CHECK (bonus_type IN ('deposit', 'free_spins', 'cashback', 'tournament')),
  bonus_amount DECIMAL(10,2) DEFAULT 0,
  terms_conditions TEXT,
  is_active BOOLEAN DEFAULT true,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Enable Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- Users can only see their own transactions
CREATE POLICY "Users can view own transactions" ON transactions FOR SELECT USING (auth.uid() = user_id);

-- Anyone can view active games and promotions
CREATE POLICY "Anyone can view active games" ON games FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view active promotions" ON promotions FOR SELECT USING (is_active = true);
```

## 🔑 OneWallet Integration

### 1. Get OneWallet Credentials
Contact OneWallet support for:
- API Key
- Webhook Secret
- Test environment access

### 2. Configure Callback URLs
- Local: `http://localhost:3000/api/onewallet/callback`
- Production: `https://yourdomain.com/api/onewallet/callback`

## 🐛 Troubleshooting

### Common Issues

**1. Port 3000 already in use:**
```bash
lsof -ti:3000 | xargs kill -9
# or use different port
npm run dev -- -p 3001
```

**2. Permission denied on setup.sh:**
```bash
chmod +x setup.sh
```

**3. Node.js version too old:**
```bash
brew upgrade node
```

**4. TypeScript errors:**
```bash
npm run type-check
```

**5. Missing dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Performance Issues
- Clear browser cache
- Restart development server
- Check for console errors

## 📞 Need Help?

1. **Check browser console** for errors
2. **Review logs** in terminal
3. **Verify environment variables** are set correctly
4. **Ensure Supabase project** is properly configured

## 🎯 Success Checklist

- [ ] Node.js v18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured
- [ ] Development server running (`npm run dev`)
- [ ] Website loads at `http://localhost:3000`
- [ ] Supabase connection working
- [ ] All pages accessible
- [ ] No console errors

🎉 **You're ready to develop your NgweOh88 Casino website!**