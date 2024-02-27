import React from 'react';
import {incomeFun} from "../api/incomeFun/incomeFun";
import {expenseFun} from "../api/expensesFun/expenseFun";
import {auth} from "@clerk/nextjs";
import { PrismaClient } from '@prisma/client';


export default async function Dashboard() {
    const user = auth().userId as string;
    const prismaC = new PrismaClient();
    const incomeItems = await prismaC.income.findMany({
      where: {userId: user}
    });
    const expenseItems = await prismaC.expense.findMany({
      where: {userId: user}
    });
  return (
      <main>
      <div>Dashboard Page</div>

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
  );
}
