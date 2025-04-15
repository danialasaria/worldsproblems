import { getProblems } from '@/utils/problem-helpers/server';
export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export async function GET(request: Request) {
  try {
    const problems = await getProblems();
    return Response.json({ 
      message: 'Successfully fetched problems',
      problems: problems 
    });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
