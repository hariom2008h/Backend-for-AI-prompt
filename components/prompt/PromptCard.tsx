
'use client';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function PromptCard({ prompt }: any) {
  return (
    <motion.div whileHover={{scale:1.05}} className="bg-white p-4 rounded-xl shadow">
      <img src={prompt.image_url || '/placeholder.png'} className="rounded"/>
      <h2>{prompt.title}</h2>
      <button onClick={()=>{navigator.clipboard.writeText(prompt.prompt_text);toast.success('Copied')}}>
        Copy
      </button>
    </motion.div>
  );
}
