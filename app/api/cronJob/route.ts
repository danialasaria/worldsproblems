import { getProblems } from '@/utils/problem-helpers/server';
export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export async function GET(request: Request) {
  try {
    await getProblems();
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
  return new Response(`We did it!`);
}
