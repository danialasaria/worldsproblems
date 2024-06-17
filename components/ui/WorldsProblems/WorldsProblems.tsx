'use client';

import { useEffect, useState } from 'react';
import ProblemCard from '../ProblemCard';
import { User } from '@supabase/supabase-js';

interface Problem {
  id: string;
  title: string;
  description: string;
  upvotes_count: number;
}

interface Props {
  user: User | null, 
  problems: Problem[]
}

export default function WorldsProblems({user, problems}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        {/* <h1 className="text-3xl font-bold">The Funniest Problems College Students Face</h1> */}
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Sign up with your .edu email to contribute.
        </p>
      </header>
        <div className="space-y-4">
          {!loading && !error && problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} userId={user?.id ?? ''} />
          ))}
        </div>
        </main>
      </div>
    </section>
  );
}
