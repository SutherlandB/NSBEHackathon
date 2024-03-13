import { SignUp } from "@clerk/nextjs";
import styles from './signUpStyle.module.css';
 
export default function Page() {
  return (
    <body>
      <div className = {styles.signUp} >
        <SignUp />
      </div>
    </body>
    
    
  );
  
 
}