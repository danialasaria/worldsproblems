'use client';

import { useState } from 'react';
import { handleUpvote, handleDownvote } from '@/utils/problem-helpers/server';
import { Card, CardTitle, CardDescription } from './card';
import { Button } from './button';

interface Problem {
  id: string;
  title: string;
  description: string;
  upvotes_count: number;
}

interface ProblemCardProps {
  problem: Problem;
  userId: string;
}

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export default function ProblemCard({ problem, userId }: ProblemCardProps) {
  const [upvotesCount, setUpvotesCount] = useState(problem.upvotes_count);

  const handleUpvoteClick = async () => {
    // Optimistically update the UI
    setUpvotesCount(upvotesCount + 1);
  
    try {
      await handleUpvote(problem.id, userId);
    } catch (error) {
      console.error('Error upvoting:', error);
      // Rollback the UI update if the server request fails
      setUpvotesCount(upvotesCount);
    }
  };

  // const handleDownvoteClick = async () => {
  //   try {
  //     await handleDownvote(problem.id, userId);
  //     setUpvotesCount(upvotesCount - 1);
  //   } catch (error) {
  //     console.error('Error downvoting:', error);
  //   }
  // };

  return (
    <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
      <div className="space-y-2">
        <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          {problem.description}
        </CardDescription>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleUpvoteClick}>
          <ArrowUpIcon className="w-5 h-5 text-primary" />
          <span className="font-medium text-primary">Upvote</span>
        </Button>
        {/* <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleDownvoteClick}>
          <ArrowUpIcon className="w-5 h-5 text-primary" />
          <span className="font-medium text-primary">Downvote</span>
        </Button> */}
        <span className="text-sm text-gray-500 dark:text-gray-400">{upvotesCount} upvotes</span>
      </div>
    </Card>
  );
}
