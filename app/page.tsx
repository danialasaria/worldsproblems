import WorldsProblems from '@/components/ui/WorldsProblems/WorldsProblems';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';

export default async function WorldsProblemsPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <WorldsProblems
      user={user}
      products={products ?? []}
      subscription={subscription}
    />
  );
}
