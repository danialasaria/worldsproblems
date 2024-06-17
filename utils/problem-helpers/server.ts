'use server';

import { createClient } from '@/utils/supabase/server';

export async function handleUpvote(problemId: string, userId: string) {
  const supabase = createClient();

  // Insert the upvote record
  const { error: insertError } = await supabase.from('upvotes').insert({ problem_id: problemId, user_id: userId });

  if (insertError) {
    throw new Error(insertError.message);
  }

  // Increment the upvotes_count
  const { error: updateError } = await supabase.rpc('increment_upvotes', { problem_id: problemId });

  if (updateError) {
    throw new Error(updateError.message);
  }
}

export async function handleDownvote(problemId: string, userId: string) {
  const supabase = createClient();

  // Insert the downvote record
  const { error: insertError } = await supabase.from('upvotes').insert({ problem_id: problemId, user_id: userId, is_upvote: false });

  if (insertError) {
    throw new Error(insertError.message);
  }

  // Decrement the upvotes_count
  const { error: updateError } = await supabase.rpc('decrement_upvotes', { problem_id: problemId });

  if (updateError) {
    throw new Error(updateError.message);
  }
}

export async function getProblems() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('problems')
    .select('id, title, description, created_at, upvotes_count')
    .order('upvotes_count', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getUser() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
