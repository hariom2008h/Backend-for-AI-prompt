
'use client';
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <nav className="sticky top-0 backdrop-blur bg-white/70 px-6 py-4 flex justify-between">
      <h1 className="font-bold">PromptHub</h1>
      <input className="border px-3 py-2 rounded-xl" placeholder="Search..."/>
      {isSignedIn ? <UserButton/> : (<div><SignInButton/><SignUpButton/></div>)}
    </nav>
  );
}
