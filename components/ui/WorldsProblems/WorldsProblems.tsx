'use client';

import type { Tables } from '@/types_db';
import { User } from '@supabase/supabase-js';
import { usePathname, useRouter } from 'next/navigation';
import ProblemCard from '../ProblemCard';

type Subscription = Tables<'subscriptions'>;
type Product = Tables<'products'>;
type Price = Tables<'prices'>;
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}


export default function WorldsProblems({ user, products, subscription }: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const currentPath = usePathname();

    return (
      <section className="bg-black">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            The definitive list of problems that{' '}
            <a
              className="text-pink-500 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              verified students face
            </a>
            .
          </p>
          <ProblemCard />
        </div>
      </section>
    );
}
