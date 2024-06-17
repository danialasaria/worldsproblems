import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

export const getUser = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});

export const getSubscription = cache(async (supabase: SupabaseClient) => {
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .maybeSingle();

  return subscription;
});

export const getProducts = cache(async (supabase: SupabaseClient) => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });

  return products;
});

export const getUserDetails = cache(async (supabase: SupabaseClient) => {
  const { data: userDetails } = await supabase
    .from('users')
    .select('*')
    .single();
  return userDetails;
});

interface Problem {
  id: string;
  title: string;
  description: string;
  created_at: string;
  upvotes_count: number;
}

export const getProblems = cache(async (supabase: SupabaseClient): Promise<Problem[]> => {
  const { data, error } = await supabase
    .from('problems')
    .select('id, title, description, created_at, upvotes_count')
    .order('upvotes_count', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as Problem[];
});