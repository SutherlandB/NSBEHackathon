import React from 'react';
import {incomeFun} from "../api/incomeFun/incomeFun";
import {expenseFun} from "../api/expensesFun/expenseFun";
import {auth, currentUser} from "@clerk/nextjs";
import { PrismaClient } from '@prisma/client';
import styles from './dashboard.module.css';
import NavBar from '../components/Nav';

export default async function Dashboard() {
    
    const userId = auth().userId as string;
    console.log(userId);
    const user = await currentUser();
    const prismaC = new PrismaClient();
    const incomeItems = await prismaC.income.findMany({
      where: {userId: userId}
    });
    const expenseItems = await prismaC.expense.findMany({
      where: {userId: userId}
    });

    
  return (
     <body>
      <NavBar/>
      <main className = {styles.dashboardBody}>
      
      <div>Dashboard Page</div>
      <div className='Greeting'> 
      <h1>Hello, {user && user.firstName && user.firstName.toUpperCase()}!</h1>
      </div>

        <form action = {incomeFun}>
          <input type = "text" placeholder = "Source (e.g. job income, stocks, tax return, etc...)" name = "source"></input>  
          <input type = "text" placeholder = "Frequency (Yearly, Monthly, Daily)" name = "frequency"></input>
          <input type = "number" step = "0.01" placeholder = "Amount ($0.00)" name = "amount"></input>
          <button type = "submit">Enter</button>
        </form> 
      
      <br>
      </br>

      {incomeItems.map(item => <p key={item.source}>{item.freq} {item.source}: ${item.amount}</p>)}

      <br>
      </br>
      <form action = {expenseFun}>
        <input type = "text" placeholder = "Source (e.g. Subsription, Bills, Groceries, Entertainment, etc...)" name = "source2"></input>  
          <input type = "text" placeholder = "Frequency (Yearly, Monthly, Daily)" name = "frequency2"></input>
          <input type = "number" step = "0.01" placeholder = "Amount ($0.00)" name = "amount2"></input>
          <button type = "submit">Enter</button>
      </form>
      <br> 
      </br>
      {expenseItems.map(item => <p key={item.source}>{item.freq} {item.source}: ${item.amount}</p>)}
      </main>
      </body>

  );
}
