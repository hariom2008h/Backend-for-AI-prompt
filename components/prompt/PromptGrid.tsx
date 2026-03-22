
import PromptCard from './PromptCard';
export default function PromptGrid({prompts}:any){
 return <div className="grid grid-cols-3 gap-6 p-6">
   {prompts.map((p:any)=><PromptCard key={p.id} prompt={p}/>)}
 </div>
}
