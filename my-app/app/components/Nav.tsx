// src/app/components/Navbr.tsx

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {UserButton, useUser} from '@clerk/nextjs';

const navItems = [
  {
    path: "/dashboard",
    name: "Home",
  },
  {
    path: "/sign-up",
    name: "Sign Up",
  },
  {
    path: "/Login",
    name: "Login",
  },
  {
    path: "/conversation",
    name: "Conversation",
  }
  
];



export default function NavBar() {

  const {user, isLoaded } = useUser();
  let pathname = usePathname() || "/";
  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);
  return (
    <header>
      {
        user && isLoaded &&
        <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
      <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          
          return (
            
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
        <UserButton afterSignOutUrl="/"/>
      </nav>
    </div>
      }
    
    </header>
  );
}