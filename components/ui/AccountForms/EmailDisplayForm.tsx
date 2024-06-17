'use client';

import Card from '@/components/ui/Card';

export default function EmailDisplayForm({
  userEmail
}: {
  userEmail: string | undefined;
}) {
  return (
    <Card
      title="Your Email"
      description="Your current email address."
      footer={
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="pb-4 sm:pb-0">
            If you need to update your email, please contact support.
          </p>
        </div>
      }
    >
      <div className="mt-8 mb-4 text-xl font-semibold">
        {userEmail ? (
          <p className="w-1/2 p-3 rounded-md bg-zinc-800">
            {userEmail}
          </p>
        ) : (
          <p className="w-1/2 p-3 rounded-md bg-zinc-800">
            Email not available
          </p>
        )}
      </div>
    </Card>
  );
}
