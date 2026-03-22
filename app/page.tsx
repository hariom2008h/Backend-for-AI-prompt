
import Navbar from '@/components/layout/Navbar';
import PromptGrid from '@/components/prompt/PromptGrid';

export default async function Home(){
  const res = await fetch(process.env.NEXT_PUBLIC_APP_URL + '/api/prompts',{cache:'no-store'});
  const prompts = await res.json();
  return (
    <div>
      <Navbar/>
      <PromptGrid prompts={prompts}/>
    </div>
  )
}
