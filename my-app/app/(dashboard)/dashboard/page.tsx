
import React from 'react';
import {incomeFun} from "../../api/incomeFun/incomeFun";
import {expenseFun} from "../../api/expensesFun/expenseFun";
import {auth, currentUser} from "@clerk/nextjs";
import { PrismaClient } from '@prisma/client';
import styles from './dashboard.module.css';
import NavBar from '../../components/Nav';
import '../../globals.css';
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form,FormField, FormItem,FormMessage, FormLabel, FormControl} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { DataTable } from './dataDisplay/data-table';
import { DataTable2 } from './dataDisplay/data-table2';
import {Income, columns} from './dataDisplay/columns';
import { FormIncome , FormExpense, FormConveration} from '../FormInput/formInput';
import { columns2 } from './dataDisplay/columns2';



  

export default async function Dashboard()  {
    
    // const form = useForm<z.infer<typeof formSchema>>({
    //   //pass configuration zod resolver
    //   resolver: zodResolver(formSchema),
    //   defaultValues: {
    //     source: "Source (e.g. job income, stocks, tax return, etc...)"
    //   }
    // });
    const userId = auth().userId as string;

    const user = await currentUser();
    const prismaC = new PrismaClient();
    const incomeItems = await prismaC.income.findMany({
      where: {userId: userId}
    });

    const expenseItems = await prismaC.expense.findMany({
      where: {userId: userId}
    });
    const handleSubmit = () => {};
    
  return (
    
     <body className = {styles.bodyStyle}>
      <main className = {styles.dashboardBody}>
      <div>Dashboard Page</div>
      <div className='Greeting'>  
      <h1>Hello, {user && user.firstName && user.firstName.toUpperCase()}!</h1>
      </div>
      <div className = "inline">
        <FormConveration  />
        </div>
      <div className = {styles.incomeStyle}>
        <div className = {styles.incomeForm}>
          <h1 >Income</h1>
          <FormIncome />
        </div>
        
      <br />
      <br />

        {/* <form action = {incomeFun}>
          <input type = "text" placeholder = "Source (e.g. job income, stocks, tax return, etc...)" name = "source"></input>  
          <input type = "text" placeholder = "Frequency (Yearly, Monthly, Daily)" name = "frequency"></input>
          <input type = "number" step = "0.01" placeholder = "Amount ($0.00)" name = "amount"></input>
          <button type = "submit">Enter</button>
        </form>  */}
      <br>
      </br>
        <div className = {styles.incomeData}>
        <DataTable columns = {columns} data = {incomeItems}  />
        </div>
        {/* {incomeItems.map(item => <p key={item.source}>{item.freq} {item.source}: ${item.amount}</p>)} -->  */}
        </div>

      <br>
      </br>
      <div className = {styles.expenseDisplay}>
      
      <div className = {styles.expenseForm}>
      <h1>Expenses</h1>
        <FormExpense/>
        </div>
      {/* <form action = {expenseFun}>
        <input type = "text" placeholder = "Source (e.g. Subsription, Bills, Groceries, Entertainment, etc...)" name = "source2"></input>  
          <input type = "text" placeholder = "Frequency (Yearly, Monthly, Daily)" name = "frequency2"></input>
          <input type = "number" step = "0.01" placeholder = "Amount ($0.00)" name = "amount2"></input>
          <button type = "submit">Enter</button>
      </form> */}
      <br>
      </br>
      <div className = {styles.expenseData}>
        <DataTable2 columns = {columns2} data = {expenseItems} />
      </div>
      {/* {expenseItems.map(item => <p key={item.source}>{item.freq} {item.source}: ${item.amount}</p>)} */}
      </div>
      </main>
      </body>

  );
}
