import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link'; 
import {incomeFun} from "../../api/incomeFun/incomeFun"

export default function Home() {
  return (
    
    <main> 
      <h1>
        What is your yearly income? 
      </h1>
      <form action = {incomeFun}>  
        <input type = "number" placeholder = "Estimated income"></input>
        <button type="submit">Enter</button>
        </form>
    </main>
  );
}
