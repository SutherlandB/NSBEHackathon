import { SignIn } from "@clerk/nextjs";
import styles from './signInStyle.module.css';
import Image from 'next/image';
export default function Page() {
  return (
    
    <body className = {styles.bodyStyle}>
      <Image src= "/logo.png" width = {100} height = {100} className="logo" alt = "Should You Buy? Logo" />
      <div className = {styles.signIn}>
          <SignIn />
      </div>
    </body>
  );
}