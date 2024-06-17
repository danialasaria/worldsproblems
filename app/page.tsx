import WorldsProblems from '@/components/ui/WorldsProblems/WorldsProblems';
import { createClient } from '@/utils/supabase/server';
import { getProblems, getUser } from '@/utils/supabase/queries';

export default async function WorldsProblemsPage() {
  const supabase = createClient();
  const [user, problems] = await Promise.all([
    getUser(supabase),
    getProblems(supabase)
  ]);

  return (
    <WorldsProblems
      user={user}
      problems={problems ?? []}
    />
  );
}
