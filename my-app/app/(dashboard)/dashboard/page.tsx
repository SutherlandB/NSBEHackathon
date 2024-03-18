
import React from 'react';
import {incomeFun} from "../../api/incomeFun/incomeFun";
import {expenseFun} from "../../api/expensesFun/expenseFun";
import {UserButton, auth, currentUser} from "@clerk/nextjs";
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
import Image from 'next/image';



  

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
      <div className = {styles.banner}>
        <Image src= "/logo.png" width = {100} height = {100} className="logo" alt = "Should You Buy? Logo" />
        <hr className = {styles.horline} />
        <div className = {styles.signoutButton}>
          <UserButton afterSignOutUrl="/" appearance={{
            elements: {
              avatarBox:
                "w-12 h-12",
            },
          }}/>
        </div>
        
      </div>
      <main className = {styles.dashboardBody}>
        <div className='Greeting'>  
        <h1 className = "text-lg text-center">Hello, <span className = "font-bold text-[#71AAE9] hover:bg-sky-700">{user && user.firstName && user.firstName.toUpperCase()}</span>!</h1>
      </div>
      <div className = {styles.convoStyle}>
        <div className = {styles.FormConversation}>
          <FormConveration userId = {userId} />
        </div>
      </div>

      <div className = {styles.allForms}>
        <div className = {styles.incomeForm}>
            <h1 className = "text-4xl text-white font-bold">Income</h1>
            <FormIncome />
        </div>
        <div className = {styles.expenseForm}>
          <h1 className = "text-4xl text-white font-bold">Expenses</h1>
          <FormExpense/>
        </div>
      </div> 
  
      <div className = {styles.incomeDisplay}>
    
        {/* <form action = {incomeFun}>
          <input type = "text" placeholder = "Source (e.g. job income, stocks, tax return, etc...)" name = "source"></input>  
          <input type = "text" placeholder = "Frequency (Yearly, Monthly, Daily)" name = "frequency"></input>
          <input type = "number" step = "0.01" placeholder = "Amount ($0.00)" name = "amount"></input>
          <button type = "submit">Enter</button>
        </form>  */}
        <div className = {styles.incomeData}>

        <h1 className = "text-white font-bold text-2xl">Income Table</h1>
        <DataTable columns = {columns} data = {incomeItems}  />
        </div>
        {/* {incomeItems.map(item => <p key={item.source}>{item.freq} {item.source}: ${item.amount}</p>)} -->  */}
      </div>


      
      <div className = {styles.expenseDisplay}>
      
      
      {/* <form action = {expenseFun}>
        <input type = "text" placeholder = "Source (e.g. Subsription, Bills, Groceries, Entertainment, etc...)" name = "source2"></input>  
          <input type = "text" placeholder = "Frequency (Yearly, Monthly, Daily)" name = "frequency2"></input>
          <input type = "number" step = "0.01" placeholder = "Amount ($0.00)" name = "amount2"></input>
          <button type = "submit">Enter</button>
      </form> */}
      <div className = {styles.expenseData}>  
      <h1 className = "text-2xl font-bold text-white">Expenses Table</h1>
        <DataTable2 columns = {columns2} data = {expenseItems} />
      </div>
      {/* {expenseItems.map(item => <p key={item.source}>{item.freq} {item.source}: ${item.amount}</p>)} */}
      </div>
      </main>
      </body>

  );
}
