"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';


    const Navbar = () => {
        const pathName = usePathname();
        const router = useRouter();
        const links = [
            {
                title:"Posts",
                path:'/posts'
            },
          
    
        ]
        const handleLogin = ()=>{
            router.push('/login')
        }
    return (
        <div>
           <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">
 <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
 <ul className="flex justify-between items-center space-x-4">
  {
    links?.map((link)=><Link className={`${pathName===link.path && "text-orange-400"}`} key={link.path} href={link.path}>{link.title}</Link>)
  }
 </ul>
 <button onClick={handleLogin} className="bg-white text-cyan-400 p-4">Login</button>
</nav>  
        </div>
    );
};

export default Navbar;