import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link'; 
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";
import {SignIn} from "@clerk/nextjs";
export default function Home() {
  const userAuth = auth();
  if(userAuth){
    redirect('/dashboard');
  }
}
