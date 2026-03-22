
import { supabaseServer } from '@/lib/supabase/server';
import { auth } from '@clerk/nextjs/server';

export async function GET(){
  const { data } = await supabaseServer.from('prompts').select('*');
  return Response.json(data);
}

export async function POST(req:Request){
  const { userId } = auth();
  if(!userId) return new Response('Unauthorized',{status:401});
  const body = await req.json();
  const { data } = await supabaseServer.from('prompts').insert([{...body, created_by:userId}]);
  return Response.json(data);
}
