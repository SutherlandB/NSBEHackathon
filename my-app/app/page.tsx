import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link'; 
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";
export default function Home() {
  const userAuth = auth();
  if(userAuth){
    redirect('/dashboard');
  }

  return (
    
    <main> 
      <div className="login">
        <div className='whiteBox'>
          <div className='info'>
            <h1 className="title">
              Create an Account!
            </h1>
            
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
              
              <button type="submit" id = 'ContinueButton'>Continue</button>
            </form>
            

          </div>
        </div>
      </div>
      <Link href="/signUp">Sign UP!</Link>
    </main>
  );
}
