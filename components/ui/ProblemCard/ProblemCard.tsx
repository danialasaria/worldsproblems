/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cpcyKJoqpxW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardTitle, CardDescription } from "./card"
import { Button } from "./button"

export default function Component() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">The World's Greatest Challenges</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">A list of global issues that can be upvoted by users.</p>
      </header>
      <div className="space-y-6">
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">Climate Change</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              The global threat of rising temperatures, sea levels, and extreme weather events due to human-caused
              greenhouse gas emissions.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upvote</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">78 upvotes</span>
          </div>
        </Card>
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">Poverty and Inequality</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              The persistent global issue of unequal access to resources, opportunities, and basic necessities for a
              decent standard of living.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upvote</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">62 upvotes</span>
          </div>
        </Card>
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">Lack of Access to Education</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Millions of children and adults worldwide lack access to quality education, hindering social and economic
              development.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upvote</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">71 upvotes</span>
          </div>
        </Card>
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">Conflict and Displacement</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Wars, civil unrest, and political instability have led to the forced displacement of millions of people
              worldwide.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upvote</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">54 upvotes</span>
          </div>
        </Card>
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">Lack of Access to Healthcare</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Millions of people worldwide lack access to affordable and quality healthcare, leading to preventable
              suffering and deaths.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upvote</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">48 upvotes</span>
          </div>
        </Card>
        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">Biodiversity Loss</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              The rapid decline of plant and animal species due to human activities, threatening the health of
              ecosystems worldwide.
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upvote</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">41 upvotes</span>
          </div>
        </Card>
      </div>
    </main>
  )
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
  )
}