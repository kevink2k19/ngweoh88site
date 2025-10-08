import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  username?: string
  phone?: string
  wallet_balance: number
  currency: string
  created_at: string
  updated_at: string
  is_verified: boolean
  profile_image?: string
}

export interface Transaction {
  id: string
  user_id: string
  amount: number
  currency: string
  type: 'deposit' | 'withdrawal' | 'bet' | 'win'
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  description?: string
  created_at: string
  onewallet_transaction_id?: string
}

export interface Game {
  id: string
  name: string
  provider: string
  category: string
  image_url: string
  is_active: boolean
  min_bet: number
  max_bet: number
  rtp: number
  created_at: string
}

export interface Promotion {
  id: string
  title: string
  description: string
  image_url: string
  bonus_type: 'deposit' | 'free_spins' | 'cashback' | 'tournament'
  bonus_amount: number
  terms_conditions: string
  is_active: boolean
  start_date: string
  end_date: string
  created_at: string
}

// Auth functions
export async function signUp(email: string, password: string, userData: any) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Database functions
export async function createUserProfile(userId: string, profileData: Partial<User>) {
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        id: userId,
        ...profileData
      }
    ])
    .select()
  
  return { data, error }
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()
  
  return { data, error }
}

export async function updateUserProfile(userId: string, updates: Partial<User>) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
  
  return { data, error }
}

export async function getUserTransactions(userId: string, limit: number = 10) {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)
  
  return { data, error }
}

export async function createTransaction(transactionData: Omit<Transaction, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('transactions')
    .insert([transactionData])
    .select()
  
  return { data, error }
}

export async function getActivePromotions() {
  const { data, error } = await supabase
    .from('promotions')
    .select('*')
    .eq('is_active', true)
    .gte('end_date', new Date().toISOString())
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export async function getGamesByCategory(category: string, limit: number = 20) {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('category', category)
    .eq('is_active', true)
    .order('name')
    .limit(limit)
  
  return { data, error }
}